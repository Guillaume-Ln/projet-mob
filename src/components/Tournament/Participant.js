import PropTypes from 'prop-types';
import './style.scss';

// * Les participant encore en course auront une class live, sinon dead, le gagnant a la class win.
function Participant({ index, participant }) {
  return (
    <div className="participant live"><span className="participant-number">{index}-</span><span className="participant-nickname">{participant.nickname}</span></div>
  );
}

Participant.propTypes = {
  index: PropTypes.number.isRequired,
  participant: PropTypes.object.isRequired,
};

export default Participant;
