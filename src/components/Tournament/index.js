/* eslint-disable max-len */
import './style.scss';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import tournamentImg from '../../assets/images/téléchargement.jpeg';
import { actionTournamentById, actionParticipants, actionRegisterToTheTournament, actionGetUserById } from '../../actions';
import Participant from './Participant';

function Tournament() {
  const dispatch = useDispatch();
  const location = useLocation();

  // * on récupère les infos du tournoi
  const dataTournament = useSelector((state) => state.dataTournament);
  // * on récupère les participants au tournoi
  const participantsId = useSelector((state) => state.tournamentParticipantsid);
  const participants = useSelector((state) => state.tournamentParticipants);
  const isConnected = useSelector((state) => state.isConnected);

  const { id } = useParams(); // on récupère l'ID du tournoi
  // console.log('log de participants', participants);

  useEffect(() => {
    // on demande les infos d'un tournoi qu'on stock dans le store grace a l'ID
    dispatch(actionTournamentById(id));
    // on récupère les participants au tournoi si l'on est connecté que l'on stock dans le store
    if (isConnected) {
      dispatch(actionParticipants(id));
      participantsId.forEach((p) => dispatch(actionGetUserById(p.user_id)));
    }
  }, [location.pathname]);

  const handleModerationClick = () => {
    console.log('handleModerationClick');
    // on dit au state qu'on veut modifier avec un editTournament true
    // un formulaire aparrait avec les input, un bouton apply et un cancel
    // si cancel on clear les inputs et on ferme le formulaire
    // si apply on fait un ajax sur la route en patch api/tournaments/:id
  };
  const handleRegisterClick = () => {
    // au clic on ajax l'user ID sur la route post api/tournaments/:id/profiles
    dispatch(actionRegisterToTheTournament(id));
  };

  return (
    <main className="main-tournament">
      <div className="top">
        <div className="container">
          <section className="one-tournament-container">
            <section className="one-tournament-container-info-and-description">
              <div className="one-tournament-container-info-and-description-info">
                <img className="one-tournament-info-img" src={tournamentImg} alt="" />
                <h3 className="one-tournament-info-title">{dataTournament.label}</h3>
                <p className="one-tournament-info">Type :<span className="one-tournament-data">{dataTournament.type}</span></p>
                <p className="one-tournament-info">Jeu :<span className="one-tournament-data">{dataTournament.game}</span></p>
                <p className="one-tournament-info">Participants :<span className="one-tournament-data">{dataTournament.max_player_count}</span></p>
                <p className="one-tournament-info">Format :<span className="one-tournament-data">{dataTournament.format}</span></p>
                <p className="one-tournament-info">Modérateur :<span className="one-tournament-data">{dataTournament.user_id}</span></p>
              </div>
              <div className="one-tournament-container-info-and-description-description">
                <p className="one-tournament-description"><span className="one-tournament-description-description">Description :</span><span className="one-tournament-data">{dataTournament.description}</span></p>
              </div>
            </section>
            <section className="one-tournament-container-button-container">
              {/* // ! ce boutton 'moderation' ne doit être visible que si on est modérateur */}
              { isConnected && <button onClick={handleModerationClick} type="button" className="button-moderate">Moderation</button> }
              { isConnected && <button onClick={handleRegisterClick} type="button" className="button-inscription">S'inscrire</button> }
            </section>
          </section>
        </div>
        <div className="bracket">
          <div className="row r1">
            <div className="encounter e1">
              <div className="player p1">1</div>
              <div className="player p2">2</div>
            </div>
            <div className="encounter e2">
              <div className="player p3">3</div>
              <div className="player p4">4</div>
            </div>
            <div className="encounter e3">
              <div className="player p5">5</div>
              <div className="player p6">6</div>
            </div>
            <div className="encounter e4">
              <div className="player p7">7</div>
              <div className="player p8">8</div>
            </div>
          </div>
          <div className="row-spacer">
            <p className="text-bracket">]</p>
            <p className="text-bracket">]</p>
          </div>
          <div className="row r2">
            <div className="encounter e5">
              <div className="player p1">2</div>
              <div className="player p2">3</div>
            </div>
            <div className="encounter e6">
              <div className="player p1">7</div>
              <div className="player p2">8</div>
            </div>
          </div>
          <div className="row-spacer">
            <p className="text-bracket">]</p>
          </div>
          <div className="row r3">
            <div className="encounter e7">
              <div className="player p1">2</div>
              <div className="player p2">7</div>
            </div>
          </div>
        </div>
      </div>
      {isConnected && (
      <section className="participants">
        {participants.map((participant, index) => (
          <Participant key={index} index={index} participant={participant} />
        ))}
      </section>
      )}
    </main>
  );
}

export default Tournament;
