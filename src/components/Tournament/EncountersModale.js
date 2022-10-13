import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function EncountersModale({ encounter }) {
  const navigate = useNavigate();
  return (
    <article className="one-encounter">
      <div onClick={() => navigate(`/tournaments/${encounter.tournament_id}/encounter/${encounter.id}`)} className="encounter-form">
        <div className="encounter-form-label-container">
          <p>Modérer la rencontre: {encounter.id}</p>
        </div>
      </div>
    </article>
  );
}

EncountersModale.propTypes = {
  encounter: PropTypes.object.isRequired,
};

export default EncountersModale;
