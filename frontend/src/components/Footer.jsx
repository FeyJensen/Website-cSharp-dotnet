function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-3 mt-5">
    <h4 className="mb-1" style={{ color: '#333' }}>Connect with me</h4>
    <div className="mb-3">
      <a href="https://www.linkedin.com/in/fey-jensen-7bb826120/" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: '#0077b5' }}>
        LinkedIn
      </a>
      <a href="https://github.com/feyjensen" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: '#333' }}>
        GitHub
      </a>
    </div>
    <p className="mb-0" style={{ color: '#555' }}>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
  </footer>
);
}

export default Footer;
