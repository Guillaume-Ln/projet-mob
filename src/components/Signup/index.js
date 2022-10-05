import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputNameValue,
  actionChangeInputFirstNameValue,
  actionChangeInputNickNameValue,
  actionChangeInputEmailValue,
  actionChangeInputCreatePasswordValue,
  actionChangeInputConfirmPasswordValue,
  actionSignupIsVisible,
  actionClearInputSignup,
} from 'src/actions';

function Signup() {
  const inputNameValue = useSelector((state) => state.inputSignup.name);
  const inputFirstNameValue = useSelector((state) => state.inputSignup.firstname);
  const inputNickNameValue = useSelector((state) => state.inputSignup.nickname);
  const inputEmailValue = useSelector((state) => state.inputSignup.email);
  const inputCreatePasswordValue = useSelector((state) => state.inputSignup.createpassword);
  const inputConfirmPasswordValue = useSelector(
    // eslint-disable-next-line function-paren-newline
    (state) => state.inputSignup.confirmpassword);
  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    dispatch(
      actionChangeInputNameValue(event.target.value),
    );
  };
  const handleChangeFirstName = (event) => {
    dispatch(
      actionChangeInputFirstNameValue(event.target.value),
    );
  };
  const handleChangeNickname = (event) => {
    dispatch(
      actionChangeInputNickNameValue(event.target.value),
    );
  };
  const handleChangeEmail = (event) => {
    dispatch(
      actionChangeInputEmailValue(event.target.value),
    );
  };
  const handleChangeCreatePassword = (event) => {
    dispatch(
      actionChangeInputCreatePasswordValue(event.target.value),
    );
  };
  const handleChangeConfirmPassword = (event) => {
    dispatch(
      actionChangeInputConfirmPasswordValue(event.target.value),
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionClearInputSignup());
    dispatch(actionSignupIsVisible(false));
  };

  const handleCancelClick = () => {
    dispatch(actionClearInputSignup());
    dispatch(actionSignupIsVisible(false));
  };

  return (
    <main className="modale">
      <section className="main-signup">
        <div className="main-signup-page">
          <h3 className="main-signup-page-title">Inscription</h3>
          <article>

            <form onSubmit={handleSubmit} className="signup-input-container">
              <span className="material-symbols-outlined account_circle">
                account_circle
              </span>
              <section className="input-left-and-right">
                <section className="input-left">
                  <label htmlFor="inputName" className="signup-user-label">
                    <input value={inputNameValue} onChange={handleChangeName} required="" id="inputName" type="text" name="text" placeholder="Nom" autoComplete="off" className="input-signup" />
                  </label>
                  <label htmlFor="inputFirstName" className="signup-user-label">
                    <input value={inputFirstNameValue} onChange={handleChangeFirstName} required="" id="inputFirstName" type="text" name="text" placeholder="Prénom" autoComplete="off" className="input-signup" />
                  </label>
                  <label htmlFor="inputNickName" className="signup-user-label">
                    <input value={inputNickNameValue} onChange={handleChangeNickname} required="" id="inputNickName" type="text" name="text" placeholder="Pseudo" autoComplete="off" className="input-signup" />
                  </label>
                </section>
                <section className="input-right">
                  <label htmlFor="inputEmail" className="signup-user-label">
                    <input value={inputEmailValue} onChange={handleChangeEmail} required="" id="inputEmail" type="email" name="email" placeholder="Email" autoComplete="off" className="input-signup" />
                  </label>
                  <label htmlFor="inputCreatePassword" className="signup-user-label">
                    <input value={inputCreatePasswordValue} onChange={handleChangeCreatePassword} required="" id="inputCreatePassword" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="input-signup" />
                  </label>
                  <label htmlFor="inputConfirmPassword" className="signup-user-label">
                    <input value={inputConfirmPasswordValue} onChange={handleChangeConfirmPassword} required="" id="inputConfirmPassword" type="password" name="password" placeholder="Confirmer le mot de passe" autoComplete="off" className="input-signup" />
                  </label>
                </section>
              </section>
              <button type="submit" className="creation-button signup-button">Créer un compte</button>
              <button onClick={handleCancelClick} type="button" className="signup-button-cancel">Annuler</button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Signup;
