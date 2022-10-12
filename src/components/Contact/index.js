import './style.scss';
import deletIcone from 'src/assets/icon/deletIcon.png';
// import { useDispatch } from 'react-redux';
// import { actionContactModale } from '../../actions';

function Contact() {
  // const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    window.location = 'mailto:mob.api.contact@gmail.com';
  };
  // const handleCloseContact = () => {
  //   dispatch(actionContactModale());
  // };
  return (
    <article className="modaleContact">
      <img className="modaleContact-deletIcon" src={deletIcone} alt="close" />
      <h3 className="modaleContact-title">Contact</h3>
      <p className="modaleContact-description">Pour toutes demande, réclamations ou bugs ayant pu être présent, nous vous remercions de contacter notre équipe de développement en cliquand sur le boutton ci-dessous.</p>
      <button className="modaleContact-button" type="button" onClick={handleClick}>mob.api.contact@gmail.com</button>
    </article>
  );
}

export default Contact;
