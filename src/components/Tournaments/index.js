import './style.scss';
import tournamentImg from 'src/assets/images/téléchargement.jpeg';

function Tournaments() {
  return (
    <main className="main-tournaments">
      <h2 className="main-tournaments-title">Les tournois du moment</h2>
      <section className="main-tournaments-pannel">

        {/* <!-- un tournoi --> */}
        <article className="one-tournament">
          <img className="one-tournament-image" src={tournamentImg} alt="tournoi" />
          <div className="one-tournament-info">
            <div className="info">
              <h3 className="info-title color-pink-neon">Ocklock tournament</h3>
              <p className="info-moderator">Modérateur: <span className="info-data">Michel</span></p>
              <p className="info-count">Participants  : <span className="info-data">64</span></p>
              <p className="info-date">Date : <span className="info-data">15/06/2042 16h00</span></p>
              <p className="info-description">Info du tournoi : <span className="info-data text-overflow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore quasi facere, doloremque possimus dignissimos aspernatur at eius cumque blanditiis qui, consequatur ratione. Exercitationem, odit?</span></p>
              <a className="info-link" href="">lien vers tournoi</a>
            </div>
          </div>
          <button type="button" className="inscription-button">S'inscrire</button>
        </article>
        {/* <!-- un tournoi --> */}
      </section>
    </main>
  );
}

export default Tournaments;
