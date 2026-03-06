import { useState } from 'react';

function AddPhotoForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', occupation: '', experience: '', imageBase64: null });
  const [submitError, setSubmitError] = useState(null);

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
      onAdd(); 
    } catch (err) {
      setSubmitError(err.message);
    }
  };

  return (
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
  );
}

export default AddPhotoForm;
