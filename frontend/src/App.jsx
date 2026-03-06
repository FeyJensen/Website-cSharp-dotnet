import Nav from './components/Nav';
import Footer from './components/Footer';

import Gallery from './components/gallery';
import HomeHero from './components/HomeHero';

function App() {
  return (
    <div className='background'>
      <Nav />
      <HomeHero />  

      <div>
        <h2 className="text-center mt-5" style={{ color: '#333' }}>About Me</h2>
        <p className="text-center mt-3" style={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
          I am a software developer in Portland, OR with experience in full-stack development. I am skilled
          in C#, .NET, and React but my passion lies in front-end developement. All those were used to 
          build this website along with the bootstrap library. I enjoy building UI's that are 
          both functional and beautiful. 
          In my free time, I work on personal projects and contribute to a private repo for a startup called Balanx-bio
        </p>
      </div>

      <div>
        <h2 className="text-center mt-5" style={{ color: '#333' }}>Personal Passions</h2>
        <p className="text-center mt-3" style={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
          I also have an Etsy shop where I create and sell handmade crafts. I started my shop
          in 2020 and since then I've won several awards for my designs. Recently, Etsy invited me
          to visit their corporate headquarters to talk shop
          and share my experiences.
        </p>

        <Gallery />

        <button type="button" className="btn d-block mx-auto mt-3 mb-5" style={{ backgroundColor: '#F1641E' }} onClick={() => window.open('https://www.etsy.com/shop/Skyeeclisse', '_blank')}>Visit My Etsy Shop</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
