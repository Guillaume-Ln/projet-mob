import { useSelector } from 'react-redux';
import Contact from '../Contact';
import './style.scss';

function Footer() {
  const modaleContact = useSelector((state) => state.modaleContact);

  const handleAboutClick = () => {

  };

  return (
    <footer className="footer">
      {modaleContact && <Contact />}
      {/* {modaleAbout && <About />} */}
      <nav className="nav-bar">
        <h3 onClick={handleAboutClick} className="footerBtnModale pointer">A PROPOS</h3>
        <h3 className="footerBtnModale pointer">CONTACT</h3>
      </nav>
      <div className="footer-copyright">
        <p>Copyright © 2022, MoB All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
