import './style.scss';
import tournamentImg from '../../assets/images/téléchargement.jpeg';

function Tournament() {
  return (
    <main className="main-tournament">
      <div className="top">
        <div className="container">
          <section className="one-tournament-container">
            <section className="one-tournament-container-info-and-description">
              <div className="one-tournament-container-info-and-description-info">
                <img className="one-tournament-info-img" src={tournamentImg} alt="" />
                <h3 className="one-tournament-info-title">Le tournoi du Dimanche</h3>
                <p className="one-tournament-info">Tournois :<span className="one-tournament-data">166</span></p>
                <p className="one-tournament-info">Jeu :<span className="one-tournament-data">xploz3D</span></p>
                <p className="one-tournament-info">Participants :<span className="one-tournament-data">8</span></p>
                <p className="one-tournament-info">Modérateur :<span className="one-tournament-data">Michel</span></p>
              </div>
              <div className="one-tournament-container-info-and-description-description">
                <p className="one-tournament-description"><span className="one-tournament-description-description">Description :</span><span className="one-tournament-data">Tirez vous dans la tête ca fait mal mais dans les pied c’est rigolo, c’est un texte qui simule une description.</span></p>
              </div>
            </section>
            <section className="one-tournament-container-button-container">
              <button type="button" className="button-moderate">Moderation</button>
              <button type="button" className="button-inscription">S'inscrire</button>
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
      <section className="participants">
        <div className="participant dead"><span className="participant-number">1-</span><span className="participant-nickname">michel</span></div>
        <div className="participant live"><span className="participant-number">2-</span><span className="participant-nickname">dark sasuke du 75</span></div>
        <div className="participant dead"><span className="participant-number">3-</span><span className="participant-nickname">jason</span></div>
        <div className="participant dead"><span className="participant-number">4-</span><span className="participant-nickname">joris</span></div>
        <div className="participant dead"><span className="participant-number">5-</span><span className="participant-nickname">toto</span></div>
        <div className="participant dead"><span className="participant-number">6-</span><span className="participant-nickname">jean-pierre-vigneron</span></div>
        <div className="participant win"><span className="participant-number">7-</span><span className="participant-nickname">Maitre Daunat</span></div>
        <div className="participant dead"><span className="participant-number">8-</span><span className="participant-nickname">bonhome pain d'épice</span></div>
      </section>
    </main>
  );
}

export default Tournament;
