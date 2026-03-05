import Nav from './components/Nav';
import Footer from './components/Footer';
import HeroBanner from './assets/aboutBioPhotos/HeroBanner.png';
import Gallery from './components/gallery';



function App() {
  return (
    <div className='background'>
      <Nav />
      
      <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
        <img src={HeroBanner} alt="Hero Banner" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.5 }} />
        <h1 style={{ 
          position: 'absolute', 
          top: '40%', 
          left: '50%', 
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          transform: 'translate(-50%, -50%)'
        }}>Welcome to My Portfolio</h1>
        <h2 className="text-center mt-4" style={{ color: '#333', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Software Developer with a passion for creating innovative solutions.
        </h2>
      </div>

      <div>
        <h2 className="text-center mt-5" style={{ color: '#333' }}>About Me</h2>
        <p className="text-center mt-3" style={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
          I am a software developer with experience in full-stack development, specializing in C#, .NET, and React. I enjoy building applications that solve real-world problems and enhance user experiences. In my free time, I like to explore new technologies and contribute to open-source projects.
        </p>
      </div>

      <div>
        <h2 className="text-center mt-5" style={{ color: '#333' }}>Personal Passions</h2>
        <p className="text-center mt-3" style={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
          I also have an Etsy shop where I create and sell handmade crafts. I started my shop
          in 2020 and since then I've won several awards for my designs. Recently, Etsy invited me to visit their corporate headquarters to talk shop
          and share my experiences.
        </p>

        <Gallery />

        <button type="button" className="btn d-block mx-auto mt-3" style={{ backgroundColor: '#F1641E' }} onClick={() => window.open('https://www.etsy.com/shop/Skyeeclisse', '_blank')}>Visit My Etsy Shop</button>
      </div>





      <Footer />
    </div>
  );
}

export default App;
