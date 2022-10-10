import { useSelector } from 'react-redux';
import TournamentCard from '../Tournaments/TournamentCard';
import '../Tournaments/style.scss';

function MyTournaments() {
  const myTournaments = useSelector((state) => state.myTournaments);
  return (
    <main className="main-tournaments">
      <h2 className="main-tournaments-title">Mes tournois</h2>
      <section className="main-tournaments-pannel">
        {myTournaments.map((tournament) => <TournamentCard key={tournament.user_id} {...tournament} />)}
      </section>
    </main>
  );
}
export default MyTournaments;
