import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/global.css';

function Photos() {
  const [entries, setEntries] = useState([]); 
  const [error, setError] = useState(null); 
  const [form, setForm] = useState({ name: '', occupation: '', experience: '', imageBase64: null }); 
  const [submitError, setSubmitError] = useState(null); 
  const navigate = useNavigate(); 

  const loadEntries = () => {
    fetch('/api/all')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => setError(err.message));
  };

  useEffect(() => { loadEntries(); }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, imageBase64: reader.result.split(',')[1] }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    try {
      const res = await fetch('/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          occupation: form.occupation,
          experience: parseInt(form.experience),
          imageBase64: form.imageBase64,
        }),
      });
      if (!res.ok) throw new Error('Failed to add entry.');
      setForm({ name: '', occupation: '', experience: '', imageBase64: null });
      document.getElementById('formFile').value = '';
      loadEntries();
    } catch (err) {
      setSubmitError(err.message);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Nav />

      <div className="container my-4">
        <h1 className="mb-4 text-center">Photos</h1>
        <h4 className="mb-4 text-center" style={{ color: '#555' }}>Click on a Photo to View Details</h4>
        
        {/*Photos*/}
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
            </div>
          ))}
        </div>
        
          {/*input form*/}
        <container className="containerCenter my-5">
        <div className="card center" style={{ width: '18rem' }}>
          <div className="card-body">
            <h2 className="card-title text-center">Add to Database</h2>
            {submitError && <p className="text-danger">{submitError}</p>}
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Name"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingOccupation" placeholder="Occupation"
              value={form.occupation} onChange={(e) => setForm({ ...form, occupation: e.target.value })} />
            <label htmlFor="floatingOccupation">Occupation</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingExperience" placeholder="Years of Experience"
              value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} />
            <label htmlFor="floatingExperience">Years of Experience</label>
          </div>
          <div className="mb-3">
            <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleFileChange} />
          </div>
          <button className="btn btn-primary w-100" onClick={handleSubmit}>Add</button>
          </div>
        </div>
        </container>


      </div>
      <Footer />
    </div>
  );
}

export default Photos;
