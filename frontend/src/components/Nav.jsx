import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logos/LogoBlack.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-nav flex-row align-items-center">
          <a className="nav-link px-2" href="/">
            <img src={logo} alt="Logo" style={{ height: '80px' }} />
          </a>
          <a className="nav-link px-2 fs-5" href="/">Home</a>
          <a className="nav-link px-2 fs-5" href="/photos">Photos</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
