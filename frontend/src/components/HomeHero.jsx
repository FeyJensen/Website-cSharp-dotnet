import HeroBanner from '../assets/aboutBioPhotos/HeroBanner.png';

export default function HomeHero() {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
        <img src={HeroBanner} alt="Hero Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <h1 style={{ 
          position: 'absolute', 
          top: '40%', 
          left: '50%', 
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          transform: 'translate(-50%, -50%)'
        }}>Fey Jensen</h1>
        <h4 className="text-center mt-4" 
        style={{ 
          color: '#333',
           position: 'absolute',
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)', 
           width: '40%', 
           minWidth: '300px',
          }}>
          Software Developer with a passion for creative design
        </h4>
      </div>
  );
}