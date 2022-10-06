import { useSelector } from 'react-redux';
import './style.scss';
import TournamentCard from './TournamentCard';

function Tournaments() {
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
