/* eslint-disable max-len */
import './style.scss';
import deletIcone from 'src/assets/icon/deletIcon.png';
import PhotoTeam from 'src/assets/images/team.png';
import { useDispatch } from 'react-redux';
import { actionAboutModale } from '../../actions';

function About() {
  const dispatch = useDispatch();
  const handleCloseAbout = () => {
    dispatch(actionAboutModale());
  };
  return (
    <article className="modaleAbout">
      <img onClick={handleCloseAbout} className="modaleAbout-deletIcon" src={deletIcone} alt="close" />
      <img className="modaleAbout-pp" src={PhotoTeam} alt="close" />
      <h3 className="modaleAbout-title">A Propos</h3>
      <div className="modaleAbout-description">
        <p className="modaleAbout-description">
          La place de l’eSport est de plus en plus installée dans la culture générale.
          MoB a pour but de répondre aux besoins grandissants de la communauté lors d’un regroupement de
          joueurs voulant créer une compétition de jeux-vidéo amicale ou (semi)professionnelle.
        </p>
        <p className="modaleAbout-description">
          MoB a pour vocation de pallier cette demande en proposant un outil simple et accessible à tous,
          permettant à chacun de pouvoir créer ou participer à un tournoi.
        </p>

        <p className="modaleAbout-description">
          MOB (multiplayers online bracket ) est un projet de fin d'étude de l'école O’clock.
          Il est porté par 5 élèves ayant suivi la formation Javascript de 6 mois.
          2 en spécialisation back end et 3 en spécialisation front-end:
        </p>
        <p className="modaleAbout-description">
          <ul>
            <ol>Laurent Cybil:  Lead dev front</ol>
            <ol>Arthur moignet:  développeur front, référent techno</ol>
            <ol>Guillaume Lanoë:  développeur front, référent techno</ol>
            <ol>Guillaume Dollé :  lead dev back, git master</ol>
            <ol>Matthieu Toulet :  product owner, scrum master</ol>
          </ul>

        </p>
        <p className="modaleAbout-description">
          Ce projet à pour but d'être présenté par chacun d’entre nous au titre pro de développeur web et mobile.
          Pour parler du projet à long terme, Nous souhaitons faire évoluer le site après le passage du titre pro.
          Vous pouvez retrouver notre road map sur notre trello
        </p>
        <a className="modaleAbout-button" href="https://trello.com/b/tNzCAAVK/mob">
          <button type="button">Trello-mob</button>
        </a>
      </div>
    </article>

  );
}

export default About;
