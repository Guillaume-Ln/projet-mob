/* import PropTypes from 'prop-types'; */

import { Link } from 'react-router-dom';
import './style.scss';

// image

import sloganImg from '../../assets/images/pexels-yan-krukov-9072216 (1).jpg';
import tournamentImg from '../../assets/images/téléchargement.jpeg';
import sloganLogo from '../../assets/images/logo_mob.png';

function Home() {
  return (

    <main className="main">

      <section className="main-informations">
        <div className="main-informations-slogan">
          <img className="slogan-img" src={sloganImg} alt="banniere Slogan" />
          <figcaption className="hover-slogan">
            <img className="slogan-logo" src={sloganLogo} alt="logo MOB" />
            <p className="slogan-desc">Multiplayer Online Bracket</p>
          </figcaption>
        </div>
        <div className="main-informations-new">
          <p>Breaking New : Michel a remporté son 38473ème tournoi de suite</p>
        </div>
      </section>

      <section className="main-tournament">
        <div className="main-tournament-inscription">
          <h3 className="main-tournament-inscription-title">TOURNAMENT</h3>
          <div className="main-tournament-inscription-container">
            {/* <!-- un tournoi --> */}
            <article className="main-tournament-inscription-one-tournament">
              <div className="image-container">
                <img className="image-container-img" src={tournamentImg} alt="banniere tournoi" />
              </div>
              <div className="main-tournament-inscription-one-tournament-info">
                <div className="info">
                  <h3 className="info-title color-pink-neon">Ocklock tournament</h3>
                  <p className="info-moderator">Modérateur: <span className="info-data">Michel</span></p>
                  <p className="info-count">Participants  : <span className="info-data">64</span></p>
                  <p className="info-date">Date : <span className="info-data">15/06/2042 16h00</span></p>
                  <p className="info-description">Info du tournoi : <span className="info-data text-overflow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore quasi facere, doloremque possimus dignissimos aspernatur at eius cumque blanditiis qui, consequatur ratione. Exercitationem, odit?</span></p>
                  <Link className="info-link" to="/tournaments/:id">lien vers tournoi</Link>
                </div>
              </div>
              <button type="button" className="inscription-button">S'inscrire</button>
            </article>
            {/* <!-- un tournoi --> */}
            {/* <!-- un tournoi --> */}
            <article className="main-tournament-inscription-one-tournament">
              <div className="image-container">
                <img className="image-container-img" src={tournamentImg} alt="banniere tournoi" />
              </div>
              <div className="main-tournament-inscription-one-tournament-info">
                <div className="info">
                  <h3 className="info-title color-pink-neon">Ocklock tournament</h3>
                  <p className="info-moderator">Modérateur: <span className="info-data">Michel</span></p>
                  <p className="info-count">Participants  : <span className="info-data">64</span></p>
                  <p className="info-date">Date : <span className="info-data">15/06/2042 16h00</span></p>
                  <p className="info-description">Info du tournoi : <span className="info-data text-overflow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore quasi facere, doloremque possimus dignissimos aspernatur at eius cumque blanditiis qui, consequatur ratione. Exercitationem, odit?</span></p>
                  <Link className="info-link" to="/tournaments/:id">lien vers tournoi</Link>
                </div>
              </div>
              <button type="button" className="inscription-button">S'inscrire</button>
            </article>
            {/* <!-- un tournoi --> */}
            {/* <!-- un tournoi --> */}
            <article className="main-tournament-inscription-one-tournament">
              <div className="image-container">
                <img className="image-container-img" src={tournamentImg} alt="banniere tournoi" />
              </div>
              <div className="main-tournament-inscription-one-tournament-info">
                <div className="info">
                  <h3 className="info-title color-pink-neon">Ocklock tournament</h3>
                  <p className="info-moderator">Modérateur: <span className="info-data">Michel</span></p>
                  <p className="info-count">Participants  : <span className="info-data">64</span></p>
                  <p className="info-date">Date : <span className="info-data">15/06/2042 16h00</span></p>
                  <p className="info-description">Info du tournoi : <span className="info-data text-overflow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore quasi facere, doloremque possimus dignissimos aspernatur at eius cumque blanditiis qui, consequatur ratione. Exercitationem, odit?</span></p>
                  <Link className="info-link" to="/tournaments/:id">lien vers tournoi</Link>
                </div>
              </div>
              <button type="button" className="inscription-button">S'inscrire</button>
            </article>
            {/* <!-- un tournoi --> */}
            {/* <!-- un tournoi --> */}
            <article className="main-tournament-inscription-one-tournament">
              <div className="image-container">
                <img className="image-container-img" src={tournamentImg} alt="banniere tournoi" />
              </div>
              <div className="main-tournament-inscription-one-tournament-info">
                <div className="info">
                  <h3 className="info-title color-pink-neon">Ocklock tournament</h3>
                  <p className="info-moderator">Modérateur: <span className="info-data">Michel</span></p>
                  <p className="info-count">Participants  : <span className="info-data">64</span></p>
                  <p className="info-date">Date : <span className="info-data">15/06/2042 16h00</span></p>
                  <p className="info-description">Info du tournoi : <span className="info-data text-overflow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore quasi facere, doloremque possimus dignissimos aspernatur at eius cumque blanditiis qui, consequatur ratione. Exercitationem, odit?</span></p>
                  <Link className="info-link" to="/tournaments/:id">lien vers tournoi</Link>
                </div>
              </div>
              <button type="button" className="inscription-button">S'inscrire</button>
            </article>
            {/* <!-- un tournoi --> */}
            {/* <!-- un tournoi --> */}
            <article className="main-tournament-inscription-one-tournament">
              <div className="image-container">
                <img className="image-container-img" src={tournamentImg} alt="banniere tournoi" />
              </div>
              <div className="main-tournament-inscription-one-tournament-info">
                <div className="info">
                  <h3 className="info-title color-pink-neon">Ocklock tournament</h3>
                  <p className="info-moderator">Modérateur: <span className="info-data">Michel</span></p>
                  <p className="info-count">Participants  : <span className="info-data">64</span></p>
                  <p className="info-date">Date : <span className="info-data">15/06/2042 16h00</span></p>
                  <p className="info-description">Info du tournoi : <span className="info-data text-overflow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore quasi facere, doloremque possimus dignissimos aspernatur at eius cumque blanditiis qui, consequatur ratione. Exercitationem, odit?</span></p>
                  <Link className="info-link" to="/tournaments/:id">lien vers tournoi</Link>
                </div>
              </div>
              <button type="button" className="inscription-button">S'inscrire</button>
            </article>
            {/* <!-- un tournoi --> */}
          </div>

        </div>

        <div className="main-tournament-leaderboard">
          <h3 className="main-tournament-leaderboard-title">LEADERBOARD</h3>
          <article className="main-tournament-leaderboard-categories">
            <div className="main-tournament-leaderboard-categories-header">
              <span className="material-symbols-rounded leaderboard-arrow">
                arrow_circle_left
              </span>
              <h4 className="main-tournament-leaderboard-categories-header-title">Nombre de victoires</h4>
              <span className="material-symbols-rounded leaderboard-arrow">
                arrow_circle_right
              </span>
            </div>
            <div className="main-tournament-leaderboard-game">
              <ul className="leaderboard">
                <li className="leaderboard-list first">
                  <span className="material-symbols-rounded color-gold">
                    military_tech
                  </span><p>1st : </p><span className="leaderboard-list-data">michel avec 9999 victoires.</span>
                </li>
                <li className="leaderboard-list second">
                  <span className="material-symbols-rounded color-silver">
                    military_tech
                  </span><p>2nd : </p><span className="leaderboard-list-data">michel avec 666 victoires.</span>
                </li>
                <li className="leaderboard-list third">
                  <span className="material-symbols-rounded color-copper">
                    military_tech
                  </span><p>3rd : </p><span className="leaderboard-list-data">michel avec 266 victoires.</span>
                </li>
                <li className="leaderboard-list"><p>4th : </p><span className="leaderboard-list-data">michel avec 173 victoires.</span></li>
                <li className="leaderboard-list"><p>5th : </p><span className="leaderboard-list-data">michel avec 122 victoires.</span></li>
                <li className="leaderboard-list"><p>6th : </p><span className="leaderboard-list-data">michel avec 99 victoires.</span></li>
                <li className="leaderboard-list"><p>7th : </p><span className="leaderboard-list-data">michel avec 75 victoires.</span></li>
                <li className="leaderboard-list"><p>8th : </p><span className="leaderboard-list-data">michel avec 52 victoires.</span></li>
                <li className="leaderboard-list"><p>9th : </p><span className="leaderboard-list-data">michel avec 39 victoires.</span></li>
                <li className="leaderboard-list"><p>10th : </p><span className="leaderboard-list-data">michel avec 38 victoires.</span></li>
                <li className="leaderboard-list"><p>11th : </p><span className="leaderboard-list-data">michel avec 34 victoires.</span></li>
                <li className="leaderboard-list"><p>12th : </p><span className="leaderboard-list-data">michel avec 34 victoires.</span></li>
                <li className="leaderboard-list"><p>13th : </p><span className="leaderboard-list-data">michel avec 26 victoires.</span></li>
                <li className="leaderboard-list"><p>14th : </p><span className="leaderboard-list-data">michel avec 25 victoires.</span></li>
                <li className="leaderboard-list"><p>15th : </p><span className="leaderboard-list-data">michel avec 23 victoires.</span></li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

  );
}

/* Home.propTypes = {

}; */

export default Home;
