# Website-cSharp-dotnet

A full-stack personal portfolio web app built with React (Vite) on the frontend and ASP.NET Core (.NET) on the backend, backed by a PostgreSQL database.

## Tech Stack

- **Frontend:** React, Vite, Bootstrap 5, React Router
- **Backend:** ASP.NET Core (Minimal API), C#
- **Database:** PostgreSQL (via Npgsql)

## Features

- Hero banner with overlaid text on the home page
- About Me and Personal Passions sections
- Photo gallery on the home page (local assets)
- Photos page fetching images and bio data from the database
- Click a photo to view its detail page (name, description)
- Add new entries to the database via a form
- Responsive Bootstrap layout with hover effects

## Project Structure

```
/frontend          React + Vite app
  /src
    App.jsx        Home page
    Photos.jsx     Photos gallery page
    PhotoDetail.jsx  Photo detail page
    /components
      Nav.jsx
      Footer.jsx
      Gallery.jsx       Local photo gallery
      PhotoGrid.jsx     DB photo grid
      AddPhotoForm.jsx  Add entry form
    /assets/aboutBioPhotos  Local images
    /styles/global.css

/server            ASP.NET Core API
  Program.cs       API endpoints
  .env             Database connection string (not committed)
```

## API Endpoints

| Method | Route        | Description              |
|--------|--------------|--------------------------|
| GET    | /all         | Get all entries          |
| GET    | /{id}        | Get single entry by ID   |
| POST   | /add         | Add a new entry          |
| DELETE | /delete/{id} | Deletes entry by id      |

## Getting Started

### Backend

```bash
cd server
dotnet run
```

Requires a `.env` file in `/server`:
```

create your own ConnectionStrings__DefaultConnection
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```
