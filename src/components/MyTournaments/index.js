import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TournamentCard from '../Tournaments/TournamentCard';
import '../Tournaments/style.scss';
import {
  actionAjaxMyTournaments,
  actionAllEncountersDone,
  actionCheckRaz,
  actionClearInputCreateTournament,
  actionClearTournamentParticipants,
  actionEncountersListModaleIsOpen,
  actionIsModerator,
  actionIsParticipant,
  actionTournamentStarted,
} from '../../actions';

function MyTournaments() {
  const dispatch = useDispatch();
  const location = useLocation();
  const myTournaments = useSelector((state) => state.myTournaments);
  const id = useSelector((state) => state.user.id);
  // console.log('myTournaments', myTournaments);
  useEffect(() => {
    dispatch(actionAjaxMyTournaments(id));
    if (location.pathname === '/mytournaments') {
      dispatch(actionClearTournamentParticipants());
      dispatch(actionIsParticipant(false));
      dispatch(actionTournamentStarted(false));
      dispatch(actionIsModerator(false));
      dispatch(actionEncountersListModaleIsOpen(false));
      dispatch(actionCheckRaz());
      dispatch(actionAllEncountersDone(false));
      dispatch(actionClearInputCreateTournament());
    }
  }, []);

  return (
    <main className="main-tournaments">
      <h2 className="main-tournaments-title">Mes tournois</h2>
      <section className="main-tournaments-pannel">
        {myTournaments.map(
          (tournament) => <TournamentCard key={tournament.id} {...tournament} />,
        )}
      </section>
    </main>
  );
}
export default MyTournaments;
