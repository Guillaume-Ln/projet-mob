import PropTypes from 'prop-types';

import './style.scss';

function EncounterBracket({ encounter, participantsIdToThisEncounter }) {
  return (
    <div key={encounter.id} className="encounter">
      <p>Rencontre n° {encounter.id}</p>
      {participantsIdToThisEncounter[0] && <div className="player">{participantsIdToThisEncounter[0].nickname}</div>}
      {participantsIdToThisEncounter[1] !== undefined && <div className="player">{participantsIdToThisEncounter[1].nickname}</div>}
    </div>
  );
}

EncounterBracket.propTypes = {
  encounter: PropTypes.object.isRequired,
  participantsIdToThisEncounter: PropTypes.array.isRequired,
};

export default EncounterBracket;
