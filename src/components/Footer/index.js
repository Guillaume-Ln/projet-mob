import { useDispatch, useSelector } from 'react-redux';
import { actionContactModale } from '../../actions';
import Contact from '../Contact';
import './style.scss';

function Footer() {
  const dispatch = useDispatch();
  const modaleContact = useSelector((state) => state.modaleContact);
  // const modaleAbout = useSelector((state) => state.modaleAbout);  // ! pas encore créer, delete ce com apres création/injection du composant

  const handleContactClick = () => {
    dispatch(actionContactModale());
  };

  const handleAboutClick = () => {

  };

  return (
    <footer className="footer">
      {modaleContact && <Contact />}
      {/* {modaleAbout && <About />} */}
      <nav className="nav-bar">
        <h3 onClick={handleAboutClick} className="footerBtnModale pointer">A PROPOS</h3>
        <h3 onClick={handleContactClick} className="footerBtnModale pointer">CONTACT</h3>
      </nav>
      <div className="footer-copyright">
        <p>Copyright © 2022, MoB All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
