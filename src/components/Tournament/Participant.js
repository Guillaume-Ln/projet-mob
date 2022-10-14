/* eslint-disable no-alert */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteIcon from 'src/assets/icon/deletIcon.png';
import { actionRemoveUserFromTournament } from '../../actions';
import './style.scss';

// * Les participant encore en course auront une class live, sinon dead, le gagnant a la class win.
function Participant({ index, participant, idTournament }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editTournament = useSelector((state) => state.editTournament);

  const handleParticipantClic = () => {
    if (editTournament) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Voulez vous vraiment retirer ce participant du tournoi ?')) {
        dispatch(actionRemoveUserFromTournament(idTournament, participant.id));
      }
    }
    else {
      console.log(editTournament, `on va sur la page profile de : ${participant.nickname} depuis le tournoi qui a pour id: ${idTournament} `);
      navigate(`/profiles/${participant.id}`);
    }
  };

  return (
    <>
      { editTournament && <div onClick={handleParticipantClic} className="participant live"><img className="detIcone-profile" src={deleteIcon} alt="deletIcon" /><span className="participant-number">{index}-</span><span className="participant-nickname">{participant.nickname}</span></div> }
      { !editTournament && <div onClick={handleParticipantClic} className="participant live"><span className="participant-number">{index}-</span><span className="participant-nickname">{participant.nickname}</span></div> }
    </>
  );
}

Participant.propTypes = {
  index: PropTypes.number.isRequired,
  participant: PropTypes.object.isRequired,
  idTournament: PropTypes.number.isRequired,
};

export default Participant;
