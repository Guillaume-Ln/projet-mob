import './style.scss';
import deleteIcon from 'src/assets/icon/deletIcon.png';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';

import {
  actionPwdModale,
  actionChangeDeleteAccountPwdValue,
  actionDeleteProfile,
  actionDisconnect,
  actionErrorMessage,
  actionClearErrorMessage,
  actionSigninIsVisible,
} from '../../actions';

function ModalePwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.errorMessage);
  const inputDeleteAccountPwdValue = useSelector((state) => state.inputDeleteAccount.deletepwd);
  const { id } = useParams();

  const handleChangeDeleteAccountPwd = (event) => {
    dispatch(
      actionChangeDeleteAccountPwdValue(event.target.value),
    );
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();

    let DeleteAccountcheck = 0;
    let DeleteAccounterror = [];

    if (inputDeleteAccountPwdValue !== '') {
      // eslint-disable-next-line no-plusplus
      DeleteAccountcheck++;
    }
    if (DeleteAccountcheck === 0) {
      DeleteAccounterror = 'Veuillez remplir tous les champs';
    }
    if (DeleteAccountcheck === 1) {
      dispatch(actionDeleteProfile(id));
      dispatch(actionDisconnect());
      navigate('/');
      dispatch(actionClearErrorMessage());
    }
    else {
      dispatch(actionErrorMessage(DeleteAccounterror));
      dispatch(actionSigninIsVisible(false));
    }
  };
  const handleClosePwdModale = () => {
    dispatch(actionPwdModale(false));
    dispatch(actionClearErrorMessage());
  };
  return (
    <article className="modalePwd">
      <img onClick={handleClosePwdModale} className="modalePwd-deletIcon" src={deleteIcon} alt="close" />
      <h3 className="modalePwd-title">Suppression du compte</h3>
      <p className="modalePwd-description">Attention cette action est irréversible !<br /> Pour pouvoir supprimer définitivement votre compte, veuillez entrer votre mot de passe:</p>
      {errorMessage !== '' && <p className="error-message">{errorMessage}</p>}
      <label className="modalePwd-input" htmlFor="inputPwd">
        <input value={inputDeleteAccountPwdValue} onChange={handleChangeDeleteAccountPwd} required="" minLength="8" id="inputPwd" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="modalePwd-input-password" />
      </label>
      <button className="modalePwd-button" onClick={handleSubmitClick} type="button">Valider</button>
    </article>
  );
}

export default ModalePwd;
