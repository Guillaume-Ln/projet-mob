/* eslint-disable no-alert */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import backIcon from 'src/assets/icon/back.png';
import {
  actionClearTournamentParticipants,
  actionPlayerWinLose,
  actionSavePlayer1,
  actionSavePlayer2,
} from '../../actions';
import './style.scss';

function Encounters() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const { tournamentId, encounterId } = useParams();
  const encounterIdToNumber = parseInt(encounterId, 10);
  const participants = useSelector((state) => state.tournamentParticipants);
  const encountersListTournamentByIdWithUsers = useSelector((state) => state.encountersListTournamentByIdWithUsers);

  useEffect(() => {
  // logique pour trouver les joueurs d'une rencontre:
    const thisEncounter = encountersListTournamentByIdWithUsers.filter((encounter) => encounter.encounter_id === encounterIdToNumber); // on récupere la rencontre
    if (thisEncounter.length) { // s'il y a une rencontre de trouver
      const joueur1 = thisEncounter[0]; // on récupere le joueur 1
      const joueur1Id = joueur1.user_id; // on prend son id
      const thisEncounterUser1 = participants.filter((participant) => participant.id === joueur1Id); // on récupere le profile grace a son id
      const joueur1Profile = thisEncounterUser1[0]; // je stock la valeur de retour dans une variable pour ne plus être dans un tableau, plus confortable.
      dispatch(actionSavePlayer1(joueur1Profile)); // on sauve le joueur1 dans le state
      if (thisEncounter.length > 0) { // s'il y a un deuxieme joueur sur cette rencontre
        const joueur2 = thisEncounter[1]; // on récupere le joueur 2
        const joueur2Id = joueur2.user_id; // on prend son id
        const thisEncounterUser2 = participants.filter((participant) => participant.id === joueur2Id); // on récupere le profile grace a son id
        const joueur2Profile = thisEncounterUser2[0];// je stock la valeur de retour dans une variable pour ne plus être dans un tableau, plus confortable.
        dispatch(actionSavePlayer2(joueur2Profile)); // on sauve le joueur2 dans le state
      }
    }
  }, []);
  const handlePlayer1Win = () => {
    if (window.confirm('Voulez vous vraiment notiffier le joueur 1 comme gagnant?')) {
      dispatch(actionPlayerWinLose(encounterId, player1.nickname, player2.nickname));
    }
  };
  const handlePlayer2Win = () => {
    if (window.confirm('Voulez vous vraiment notiffier le joueur 1 comme gagnant?')) {
      dispatch(actionPlayerWinLose(encounterId, player2.nickname, player1.nickname));
    }
  };
  const handleBackClick = () => {
    dispatch(actionClearTournamentParticipants());
    navigate(`/tournaments/${tournamentId}`);
  };
  return (
    <section className="main-encounter">
      <h3 className="main-encounter-title">Rencontre numéro : {encounterId}</h3>
      {player1 && <p className="main-encounter-desc">Cliquez sur le joueur gagnant.</p>}
      {(player1 === '' && player2 === '') && <p className="main-encounter-no-player">il n'y a pas de joueur sur cette rencontre.</p>}
      <div className="main-encounter-container">
        {player1 && <p onClick={handlePlayer1Win} className="main-encounter-player pointer">Joueur 1 : <span>{player1.nickname}</span></p>}
        {player2 && <p onClick={handlePlayer2Win} className="main-encounter-player pointer">Joueur 2 : <span>{player2.nickname}</span></p>}
      </div>
      <img onClick={handleBackClick} className="main-encounter-backIcon" src={backIcon} alt="retour" />
    </section>
  );
}

export default Encounters;
