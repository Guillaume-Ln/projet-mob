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
} from '../../actions';

function ModaleNewPwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(actionPatchProfilePwd(id));
    navigate('/');
    dispatch(actionDisconnect());
    dispatch(actionSigninIsVisible(true));
  };
  const handleClosePwdModale = () => {
    dispatch(actionNewPwdModale(false));
  };
  return (
    <article className="modaleNewPwd">
      <img onClick={handleClosePwdModale} className="modaleNewPwd-deletIcon" src={deleteIcon} alt="close" />
      <h3 className="modaleNewPwd-title">Changement de mot de passe</h3>
      <p className="modaleNewPwd-description">Entrez votre mot de passe actuel:</p>
      <label className="modaleNewPwd-input" htmlFor="inputConfirmPassword">
        <input value={inputAccountActualPwdValue} onChange={handleChangeAccountActualPwd} required="" id="inputActualPwd" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="modaleNewPwd-input-password" />
      </label>
      <p className="modaleNewPwd-description">Entrez un nouveau mot de passe:</p>
      <label className="modaleNewPwd-input" htmlFor="inputConfirmPassword">
        <input value={inputAccountNewPwdValue} onChange={handleChangeAccountNewPwd} required="" id="inputNewPwd" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="modaleNewPwd-input-password" />
      </label>
      <button className="modaleNewPwd-button" onClick={handleSubmitClick} type="button">Valider</button>
    </article>
  );
}

export default ModaleNewPwd;
