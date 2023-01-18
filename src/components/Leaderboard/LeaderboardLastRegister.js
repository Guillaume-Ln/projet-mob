/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { actionSaveLeaderboardLastRegistered } from '../../actions';

// import './style.scss';

function LeaderboardLastRegister({
  nickname,
  created_at,

}) {
  const dispatch = useDispatch();
  const lastRegistered = useSelector((state) => state.leaderboardLastRegistered);

  useEffect(() => {
    dispatch(actionSaveLeaderboardLastRegistered());
  }, []);

  return (
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
          <li className="leaderboard-list first">
            <span className="material-symbols-rounded color-gold">
              military_tech
            </span><p>1st : </p><span className="leaderboard-list-data">{nickname} c'est inscrit le {lastRegistered[0].created_at}.</span>
          </li>
          <li className="leaderboard-list second">
            <span className="material-symbols-rounded color-silver">
              military_tech
            </span><p>2nd : </p><span className="leaderboard-list-data">{lastRegistered[1].nickname} c'est inscrit le {lastRegistered[1].created_at}.</span>
          </li>
          <li className="leaderboard-list third">
            <span className="material-symbols-rounded color-copper">
              military_tech
            </span><p>3rd : </p><span className="leaderboard-list-data">{lastRegistered[2].nickname} c'est inscrit le {lastRegistered[2].created_at}.</span>
          </li>
          {lastRegistered.slice(3).forEach((element) => {
            <li className="leaderboard-list"><p>4th : </p><span className="leaderboard-list-data">{element.nickname} c'est inscrit le {element.created_at}.</span></li>;
          })}
        </ul>
      </div>
    </article>
  );
}

LeaderboardLastRegister.propTypes = {
  nickname: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,

};

export default LeaderboardLastRegister;
