import colorfulEarrings from '../assets/aboutBioPhotos/IMG_3541.jpeg';
import DodEarrings from '../assets/aboutBioPhotos/IMG_8216.JPG';
import butterfly from '../assets/aboutBioPhotos/IMG_8243.JPG';
import cherry from '../assets/aboutBioPhotos/IMG_8351.JPG';

function Gallery() {

    const galleryPhotos = [colorfulEarrings, DodEarrings, butterfly, cherry];

    return (
         <div className="container my-5">
        <div className="row g-3">
          {galleryPhotos.map((src, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3">
              <img
                src={src}
                alt={`gallery-${i + 1}`}
                className="img-fluid rounded"
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    )
}

export default Gallery;