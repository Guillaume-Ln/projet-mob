import './style.scss';
import deleteIcon from 'src/assets/icon/deletIcon.png';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  actionModaleUpdate,
  actionChangeUpdateAccountAvatarValue,
  actionChangeUpdateAccountNicknameValue,
  actionChangeUpdateAccountFirstnameValue,
  actionChangeUpdateAccountLastnameValue,
  actionUpdateProfileInfo,
  actionSigninIsVisible,
  actionErrorMessage,
} from '../../actions';

function ModaleUpdate() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const inputUpdateAccountAvatarValue = useSelector((state) => state.inputUpdateAccount.avatar);
  const inputUpdateAccountNicknameValue = useSelector(
    (state) => state.inputUpdateAccount.nickname,
  );
  const inputUpdateAccountFirstnameValue = useSelector(
    (state) => state.inputUpdateAccount.firstname,
  );
  const inputUpdateAccountLastnameValue = useSelector((state) => state.inputUpdateAccount.lastname);
  const { id } = useParams();
  const handleChangeUpdateAccountAvatar = (event) => {
    dispatch(
      actionChangeUpdateAccountAvatarValue(event.target.value),
    );
  };
  const handleChangeUpdateAccountNickname = (event) => {
    dispatch(
      actionChangeUpdateAccountNicknameValue(event.target.value),
    );
  };
  const handleChangeUpdateAccountFirstname = (event) => {
    dispatch(
      actionChangeUpdateAccountFirstnameValue(event.target.value),
    );
  };
  const handleChangeUpdateAccountLastname = (event) => {
    dispatch(
      actionChangeUpdateAccountLastnameValue(event.target.value),
    );
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();

    let Updatecheck = 0;
    let Updateerror = [];

    if (inputUpdateAccountNicknameValue !== '') {
    // eslint-disable-next-line no-plusplus
      Updatecheck++;
    }
    if (inputUpdateAccountFirstnameValue !== '') {
      // eslint-disable-next-line no-plusplus
      Updatecheck++;
    }
    if (inputUpdateAccountLastnameValue !== '') {
    // eslint-disable-next-line no-plusplus
      Updatecheck++;
    }
    if (Updatecheck < 3) {
      Updateerror = 'Veuillez remplir tous les champs';
    }
    if (Updatecheck === 3) {
      dispatch(actionUpdateProfileInfo(id));
      dispatch(actionModaleUpdate(false));
      setTimeout(() => {
        if (window.localStorage) {
          if (!localStorage.getItem('firstLoad')) {
            localStorage.firstLoad = true;
            window.location.reload();
          }
        }
        else {
          localStorage.removeItem('firstLoad');
        }
      }, 500);
    }
    else {
      dispatch(actionErrorMessage(Updateerror));
      dispatch(actionSigninIsVisible(false));
    }
  };
  const handleCloseModaleUpdate = () => {
    dispatch(actionModaleUpdate(false));
  };

  return (
    <article className="modaleUpdate">
      <img onClick={handleCloseModaleUpdate} className="modaleUpdate-deletIcon" src={deleteIcon} alt="close" />
      <h3 className="modaleUpdate-title">Modification de vos informations</h3>
      {errorMessage !== '' && <p className="error-message">{errorMessage}</p>}
      <p className="modaleUpdate-description">Editez votre photo de profil:</p>
      <label className="modaleUpdate-input" htmlFor="inputNickname">
        <input value={inputUpdateAccountAvatarValue} onChange={handleChangeUpdateAccountAvatar} required="" id="inputUpdatePhoto" type="text" name="text" placeholder="url de l'image" autoComplete="off" className="modaleUpdate-input-infos" />
      </label>
      <p className="modaleUpdate-description">Editez votre pseudo:</p>
      <label className="modaleUpdate-input" htmlFor="inputNickname">
        <input value={inputUpdateAccountNicknameValue} onChange={handleChangeUpdateAccountNickname} required="" id="inputUpdateNickname" type="text" name="text" placeholder="Pseudo" autoComplete="off" className="modaleUpdate-input-infos" />
      </label>
      <p className="modaleUpdate-description">Editez votre prénom:</p>
      <label className="modaleUpdate-input" htmlFor="inputFirstname">
        <input value={inputUpdateAccountFirstnameValue} onChange={handleChangeUpdateAccountFirstname} required="" id="inputUpdateFirstname" type="text" name="text" placeholder="Prénom" autoComplete="off" className="modaleUpdate-input-infos" />
      </label>
      <p className="modaleUpdate-description">Editez votre nom:</p>
      <label className="modaleUpdate-input" htmlFor="inputLastname">
        <input value={inputUpdateAccountLastnameValue} onChange={handleChangeUpdateAccountLastname} required="" id="inputUpdateLastname" type="text" name="text" placeholder="Nom" autoComplete="off" className="modaleUpdate-input-infos" />
      </label>
      <button className="modaleUpdate-button" onClick={handleSubmitClick} type="button">Valider</button>
    </article>
  );
}

export default ModaleUpdate;
