import PropTypes from 'prop-types';
import { useEffect } from 'react';
import check from 'src/assets/icon/check.png';
import './style.scss';

function EncountersModale({ encounter }) {
  useEffect(() => {

  }, []);
  const handleEncounterSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <article className="one-encounter">
      <p>encounter id: {encounter.id}</p>
      <form onSubmit={handleEncounterSubmit} className="encounter-form">
        <div className="encounter-form-label-container">
          <label htmlFor="joueur1">
            joueur1
            <input type="radio" value="joueur1" name="joueur" />
          </label>
          <label htmlFor="joueur2">
            joueur2
            <input type="radio" value="joueur2" name="joueur" />
          </label>
        </div>
        <button className="encounter-form-submit-btn" type="submit"><img src={check} alt="valisation" /></button>
      </form>
    </article>
  );
}

EncountersModale.propTypes = {
  encounter: PropTypes.object.isRequired,
};

export default EncountersModale;
