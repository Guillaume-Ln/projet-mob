import PropTypes, { object } from 'prop-types';
import { useEffect } from 'react';
import check from 'src/assets/icon/check.png';
import './style.scss';

function EncountersModale({ encounter, encountersListTournamentByIdWithUsers }) {
  useEffect(() => {
    console.log(encountersListTournamentByIdWithUsers);

    // ! attention, ca peut pété ca.
    // ! en gros, tu en est au moment ou tu récupere les id des joueurs avec encountersListTournamentByIdWithUsers
    // ! et tu chope les profile avec ca, profite en pour afficher autre chose que joueur 1 et joueur 2
    // ! une fois cela fait, la prochaine étape est de faire les requete pour dire qui a gagner/perdus.
    // ! cordialement...
    // ! lolo
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
  encountersListTournamentByIdWithUsers: PropTypes.arrayOf(object).isRequired,
};

export default EncountersModale;
