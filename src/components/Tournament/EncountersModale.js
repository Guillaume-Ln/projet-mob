import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionEncountersListModaleIsOpen } from '../../actions';
import './style.scss';

function EncountersModale({ encounter }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEncounterClick = () => {
    dispatch(actionEncountersListModaleIsOpen(false));
    navigate(`/tournaments/${encounter.tournament_id}/encounter/${encounter.id}`);
  };

  return (
    <article className="one-encounter">
      <div onClick={handleEncounterClick} className="encounter-form">
        <div className="encounter-form-label-container pointer">
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
