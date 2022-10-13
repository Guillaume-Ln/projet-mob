import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  actionAllEncountersDone,
  actionCheck,
  actionClearTournamentParticipants,
  actionEncountersListModaleIsOpen,
  actionIsModerator,
  actionIsParticipant,
  actionTournamentStarted,
} from '../../actions';
import './style.scss';
import TournamentCard from './TournamentCard';

function Tournaments() {
  const dispatch = useDispatch();
  const location = useLocation();

  // eslint-disable-next-line max-len
  // ! en attendant de faire mieu, quand l'utilisateur revient sur la liste des tournois, les infos des participants sont effacer pour éviter de les cumulés et le status modérateur est enlever pour qu'un user ne puisse pas voir le bouton de modération
  useEffect(() => {
    if (location.pathname === '/tournaments') {
      dispatch(actionClearTournamentParticipants());
      dispatch(actionIsParticipant(false));
      dispatch(actionTournamentStarted(false));
      dispatch(actionIsModerator(false));
      dispatch(actionEncountersListModaleIsOpen(false));
      dispatch(actionCheck(0));
      dispatch(actionAllEncountersDone(false));
    }
  }, []);

  const tournaments = useSelector((state) => state.tournaments);
  return (
    <main className="main-tournaments">
      <h2 className="main-tournaments-title">Les tournois du moment</h2>
      <section className="main-tournaments-pannel">
        {tournaments.map((tournament) => <TournamentCard key={tournament.id} {...tournament} />)}
      </section>
    </main>
  );
}

export default Tournaments;
