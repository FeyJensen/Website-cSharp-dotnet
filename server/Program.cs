using Npgsql;
using DotNetEnv;

Env.Load();

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var dataSource = NpgsqlDataSource.Create(connectionString!);
builder.Services.AddSingleton(dataSource);

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins("http://localhost:5173").AllowAnyMethod().AllowAnyHeader()));

var app = builder.Build();

app.UseCors();


app.MapGet("/{id}", async (int id, NpgsqlDataSource db) =>
{
    try
    {
        await using var cmd = db.CreateCommand("SELECT name, occupation, experience, image FROM aboutbio WHERE id = @id");
        cmd.Parameters.AddWithValue("id", id);
        await using var reader = await cmd.ExecuteReaderAsync();
        if (!await reader.ReadAsync()) return Results.NotFound("No aboutbio found.");
        var name = reader.GetString(0);
        var occupation = reader.GetString(1);
        var experience = reader.GetInt32(2);
        var imageBytes = reader.GetFieldValue<byte[]>(3);
        return Results.Ok(new
        {
            description = $"This is {name}. A {occupation} with {experience} years of experience.",
            image = Convert.ToBase64String(imageBytes)
        });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Database error: {ex.Message}");
        return Results.Problem(ex.Message);
    }
}); 

app.MapGet("/all", async (NpgsqlDataSource db) =>
{
    try
    {
        await using var cmd = db.CreateCommand("SELECT name, occupation, experience, image FROM aboutbio");
        await using var reader = await cmd.ExecuteReaderAsync();
        var results = new List<object>();
        while (await reader.ReadAsync())
        {
            var name = reader.GetString(0);
            var occupation = reader.GetString(1);
            var experience = reader.GetInt32(2);
            var imageBytes = reader.IsDBNull(3) ? null : reader.GetFieldValue<byte[]>(3);
            string? mimeType = null;
            if (imageBytes != null)
                mimeType = imageBytes.Length > 3 && imageBytes[0] == 0x89 && imageBytes[1] == 0x50
                    ? "image/png" : "image/jpeg";
            results.Add(new
            {
                name,
                description = $"This is {name}. A {occupation} with {experience} years of experience.",
                image = imageBytes != null ? Convert.ToBase64String(imageBytes) : null,
                mimeType
            });
        }
        if (results.Count == 0) return Results.NotFound("No aboutbio found.");
        return Results.Ok(results);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Database error: {ex.Message}");
        return Results.Problem(ex.Message);
    }
});

app.Run();


 
