import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function PhotoDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No photo data found. <button onClick={() => navigate('/photos')}>Go back</button></p>;

  const { image, mimeType, name, description } = state;

  return (
    <div>
      <Nav />
      <div className="container my-5">
        <button className="btn btn-outline-secondary mb-4" onClick={() => navigate('/photos')}>← Back</button>
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-md-5">
            <img
              src={`data:${mimeType};base64,${image}`}
              alt={name}
              className="img-fluid rounded shadow"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-5">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PhotoDetail;
