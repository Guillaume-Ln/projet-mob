/* eslint-disable max-len */
import PropTypes from 'prop-types';

import './style.scss';

// image

import { useSelector } from 'react-redux';
import sloganImg from 'src/assets/images/pexels-yan-krukov-9072216 (1).jpg';
import sloganLogo from 'src/assets/images/logo_mob.png';
import { useEffect } from 'react';
import TournamentCard from '../Tournaments/TournamentCard';

function Home({ lastRegistered }) {
  const tournaments = useSelector((state) => state.tournaments);
  useEffect(() => {
  }, []);
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
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} {...tournament} />))}
          </div>
        </div>
        <div className="main-tournament-leaderboard">
          <h3 className="main-tournament-leaderboard-title">LEADERBOARD</h3>
          <article className="main-tournament-leaderboard-categories">
            <div className="main-tournament-leaderboard-categories-header">
              <span className="material-symbols-rounded leaderboard-arrow">
                arrow_circle_left
              </span>
              <h4 className="main-tournament-leaderboard-categories-header-title">Dernières inscriptions</h4>
              <span className="material-symbols-rounded leaderboard-arrow">
                arrow_circle_right
              </span>
            </div>
            <div className="main-tournament-leaderboard-game">
              <ul className="leaderboard">

                {lastRegistered.map((last, index) => {
                  if (index === 0) {
                    return (
                      <li className="leaderboard-list first">
                        <span className="material-symbols-rounded color-gold">
                          military_tech
                        </span><p>1st : </p><span className="leaderboard-list-data">{last.nickname}</span>
                      </li>
                    );
                  }
                  if (index === 1) {
                    return (
                      <li className="leaderboard-list second">
                        <span className="material-symbols-rounded color-silver">
                          military_tech
                        </span><p>2nd : </p><span className="leaderboard-list-data">{last.nickname}</span>
                      </li>
                    );
                  }
                  if (index === 2) {
                    return (
                      <li className="leaderboard-list third">
                        <span className="material-symbols-rounded color-copper">
                          military_tech
                        </span><p>3rd : </p><span className="leaderboard-list-data">{last.nickname}</span>
                      </li>
                    );
                  }
                  if (index >= 3) {
                    return (
                      <li className="leaderboard-list"><p>{index + 1}th : </p><span className="leaderboard-list-data">{last.nickname}</span></li>
                    );
                  }
                })}

                {/*

                {lastRegistered.slice(3).forEach((element) => {
                  ;
                })} */}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

  );
}

Home.propTypes = {
  lastRegistered: PropTypes.array.isRequired,
};

export default Home;
