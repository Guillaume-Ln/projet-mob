import { NavLink } from 'react-router-dom';

import './style.scss';

function Footer() {
  const checkIsActive = ({ isActive }) => (isActive ? 'nav-bar-link nav-bar-link--active' : 'nav-bar-link');
  return (
    <footer className="footer">
      <nav className="nav-bar">
        <NavLink to="/about" className={checkIsActive}>A PROPOS</NavLink>
        <NavLink to="/contact" className={checkIsActive}>CONTACT</NavLink>
      </nav>
      <div className="footer-copyright">
        <p>Copyright © 2022, MoB All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
