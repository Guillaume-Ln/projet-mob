import { useDispatch, useSelector } from 'react-redux';
import { actionAboutModale, actionContactModale, actionTermsOfUseModale } from '../../actions';
import About from '../About';
import Contact from '../Contact';
import TermsOfUse from '../TermsOfUse';

import './style.scss';

function Footer() {
  const dispatch = useDispatch();
  const modaleContact = useSelector((state) => state.modaleContact);
  const modaleAbout = useSelector((state) => state.modaleAbout);
  const modaleTermsOfUse = useSelector((state) => state.modaleTermsOfUse);

  const handleContactClick = () => {
    dispatch(actionContactModale());
  };

  const handleAboutClick = () => {
    dispatch(actionAboutModale());
  };
  const handleTermOfUseClick = () => {
    dispatch(actionTermsOfUseModale());
  };
  return (
    <footer className="footer">
      {modaleContact && <Contact />}
      {modaleAbout && <About />}
      {modaleTermsOfUse && <TermsOfUse />}
      <nav className="nav-bar">
        <h3 onClick={handleAboutClick} className="footerBtnModale pointer">A PROPOS</h3>
        <h3 onClick={handleContactClick} className="footerBtnModale pointer">CONTACT</h3>
        <h3 onClick={handleTermOfUseClick} className="footerBtnModale pointer">CGU</h3>
      </nav>
      <div className="footer-copyright">
        <p>Copyright © 2022, MoB All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
