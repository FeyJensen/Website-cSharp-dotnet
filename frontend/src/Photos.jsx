import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

function Photos() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/all')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Nav />
      <div className="container my-4">
        <h1 className="mb-4 text-center">Photos</h1>
        <h4 className="mb-4 text-center" style={{ color: '#555' }}>Click on a Photo to View Details</h4>
        <div className="row g-3">
          {entries.map((entry, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3">
              {entry.image && (
                <img
                  src={`data:${entry.mimeType};base64,${entry.image}`}
                  alt={entry.name}
                  className="img-fluid rounded"
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Photos;
