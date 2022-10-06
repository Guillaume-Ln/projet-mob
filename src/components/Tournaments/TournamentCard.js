/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function TournamentCard({
  date,
  description,
  format,
  game,
  id,
  image,
  label,
  max_player_count,
  type,
  user_id,
}) {
  return (
    <article className="one-tournament">
      <img className="one-tournament-image" src={image} alt="tournoi" />
      <div className="one-tournament-info">
        <div className="info">
          <h3 className="info-title color-pink-neon">{label}</h3>
          <p className="info-game">Jeu  : <span className="info-data">{game}</span></p>
          <p className="info-moderator">Modérateur: <span className="info-data">{user_id}</span></p>
          <p className="info-count">Participants  : <span className="info-data">{max_player_count}</span></p>
          <p className="info-format">Format  : <span className="info-data">{format}</span></p>
          <p className="info-date">Date : <span className="info-data">{date}</span></p>
          <p className="info-description">Info du tournoi : <span className="info-data text-overflow">{description}</span></p>
          <p className="info-type">Type  : <span className="info-data">{type}</span></p>
          <Link className="info-link" to={`/tournaments/${id}`}>lien vers tournoi</Link>
        </div>
      </div>
      {type !== 'privé' && <button type="button" className="inscription-button">S'inscrire</button> }
    </article>
  );
}

TournamentCard.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max_player_count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
};

export default TournamentCard;
