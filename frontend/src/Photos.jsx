import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PhotoGrid from './components/PhotoGrid';
import AddPhotoForm from './components/AddPhotoForm';
import './styles/global.css';

function Photos() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  const loadEntries = () => {
    fetch('/api/all')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => setError(err.message));
  };

  useEffect(() => { loadEntries(); }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className='background'>
      <Nav />
      
      <div className="container my-4">
        <h1 className="mb-4 text-center">Photos</h1>
        <h4 className="mb-4 text-center" style={{ color: '#555' }}>Click on a Photo to View Details</h4>
        <PhotoGrid entries={entries} />
        <AddPhotoForm onAdd={loadEntries} />
      </div>

      <Footer />
    </div>
  );
}

export default Photos;
