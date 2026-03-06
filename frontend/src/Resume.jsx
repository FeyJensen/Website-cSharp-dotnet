import Nav from './components/Nav';
import Footer from './components/Footer';
import resume from './assets/aboutBioPhotos/resume.pdf';


function Resume() {
    return (
        <div className='background'>
            <Nav />
            <div className="container my-5">
                <div className="p-5 bg-white rounded shadow">
                    <h1 className="text-center mb-4" style={{ color: '#333' }}>My Resume</h1>
                    <p className="text-center" style={{ color: '#555' }}>
                        You can view my resume by clicking the button below. It will open in a new tab.
                    </p>
                    <div className="text-center mt-4">
                        <button
                            className="btn"
                            style={{ backgroundColor: '#F1641E', color: '#fff' }}
                            onClick={() => window.open(resume, '_blank')}
                        >
                            View My Resume
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;