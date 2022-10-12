import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TournamentCard from '../Tournaments/TournamentCard';
import '../Tournaments/style.scss';
import { actionAjaxMyTournaments } from '../../actions';

function MyTournaments() {
  const dispatch = useDispatch();
  const myTournaments = useSelector((state) => state.myTournaments);
  const id = useSelector((state) => state.user.id);
  // console.log('myTournaments', myTournaments);
  useEffect(() => {
    dispatch(actionAjaxMyTournaments(id));
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
