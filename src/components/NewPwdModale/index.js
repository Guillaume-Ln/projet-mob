import './style.scss';
import deleteIcon from 'src/assets/icon/deletIcon.png';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';

import {
  actionNewPwdModale,
  actionPatchProfilePwd,
  actionChangeAccountActualPwdValue,
  actionChangeAccountNewPwdValue,
  actionDisconnect,
  actionSigninIsVisible,
  actionErrorMessage,
  actionClearErrorMessage,
} from '../../actions';

function ModaleNewPwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.errorMessage);
  const inputAccountActualPwdValue = useSelector((state) => state.inputPatchAccount.actualpwd);
  const inputAccountNewPwdValue = useSelector((state) => state.inputPatchAccount.newpwd);
  const { id } = useParams();

  const handleChangeAccountActualPwd = (event) => {
    dispatch(
      actionChangeAccountActualPwdValue(event.target.value),
    );
  };
  const handleChangeAccountNewPwd = (event) => {
    dispatch(
      actionChangeAccountNewPwdValue(event.target.value),
    );
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();

    let NewPwdcheck = 0;
    let NewPwderror = [];

    if (inputAccountActualPwdValue !== '') {
    // eslint-disable-next-line no-plusplus
      NewPwdcheck++;
    }
    if (inputAccountNewPwdValue !== '') {
    // eslint-disable-next-line no-plusplus
      NewPwdcheck++;
    }
    if (NewPwdcheck < 2) {
      NewPwderror = 'Veuillez remplir tous les champs';
    }
    if (NewPwdcheck === 2) {
      dispatch(actionPatchProfilePwd(id));
      navigate('/');
      dispatch(actionDisconnect());
      dispatch(actionSigninIsVisible(true));
      dispatch(actionClearErrorMessage());
    }
    else {
      dispatch(actionErrorMessage(NewPwderror));
      dispatch(actionSigninIsVisible(false));
    }
  };

  const handleClosePwdModale = () => {
    dispatch(actionNewPwdModale(false));
    dispatch(actionClearErrorMessage());
  };

  return (
    <article className="modaleNewPwd">
      <img onClick={handleClosePwdModale} className="modaleNewPwd-deletIcon" src={deleteIcon} alt="close" />
      <h3 className="modaleNewPwd-title">Changement de mot de passe</h3>
      {errorMessage !== '' && <p className="error-message">{errorMessage}</p>}
      <p className="modaleNewPwd-description">Entrez votre mot de passe actuel:</p>
      <label className="modaleNewPwd-input" htmlFor="inputConfirmPassword">
        <input value={inputAccountActualPwdValue} onChange={handleChangeAccountActualPwd} required="" minLength="8" id="inputActualPwd" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="modaleNewPwd-input-password" />
      </label>
      <p className="modaleNewPwd-description">Entrez un nouveau mot de passe:</p>
      <label className="modaleNewPwd-input" htmlFor="inputConfirmPassword">
        <input value={inputAccountNewPwdValue} onChange={handleChangeAccountNewPwd} required="" minLength="8" id="inputNewPwd" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="modaleNewPwd-input-password" />
      </label>
      <button className="modaleNewPwd-button" onClick={handleSubmitClick} type="button">Valider</button>
    </article>
  );
}

export default ModaleNewPwd;
