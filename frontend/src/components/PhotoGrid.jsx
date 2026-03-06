import { useNavigate } from 'react-router-dom';

function PhotoGrid({ entries, onDelete }) {
  const navigate = useNavigate();
  
  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this photo?')) return;

    fetch(`/api/delete/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to delete photo');
        onDelete();
      })
      .catch((err) => alert(err.message));
  };
  

  return (
    <div className="row g-3 justify-content-center">
      {entries.map((entry, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-3 photo-card" onClick={() => navigate(`/photos/${entry.id}`, { state: entry })}>
          {entry.image && (
            <img
              src={`data:${entry.mimeType};base64,${entry.image}`}
              alt={entry.name}
              className="img-fluid rounded"
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
          )}
          <button
            className="btn btn-danger btn-sm delete-btn me-2"
            onClick={(e) => { e.stopPropagation(); handleDelete(entry.id); }}
          >Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;
