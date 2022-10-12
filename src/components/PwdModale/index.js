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
} from '../../actions';

function ModalePwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputDeleteAccountPwdValue = useSelector((state) => state.inputDeleteAccount.deletepwd);
  const { id } = useParams();

  const handleChangeDeleteAccountPwd = (event) => {
    dispatch(
      actionChangeDeleteAccountPwdValue(event.target.value),
    );
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();
    dispatch(actionDeleteProfile(id));
    dispatch(actionDisconnect());
    navigate('/');
  };
  const handleClosePwdModale = () => {
    dispatch(actionPwdModale(false));
  };
  return (
    <article className="modalePwd">
      <img onClick={handleClosePwdModale} className="modalePwd-deletIcon" src={deleteIcon} alt="close" />
      <h3 className="modalePwd-title">Suppression du compte</h3>
      <p className="modalePwd-description">Attention cette action est irréversible !<br /> Pour pouvoir supprimer définitivement votre compte, veuillez entrer votre mot de passe:</p>
      <label className="modalePwd-input" htmlFor="inputConfirmPassword">
        <input value={inputDeleteAccountPwdValue} onChange={handleChangeDeleteAccountPwd} required="" id="inputPwd" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="modalePwd-input-password" />
      </label>
      <button className="modalePwd-button" onClick={handleSubmitClick} type="button">Valider</button>
    </article>
  );
}

export default ModalePwd;
