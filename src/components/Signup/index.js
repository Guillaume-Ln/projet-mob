import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputNameValue,
  actionChangeInputFirstNameValue,
  actionChangeInputNickNameValue,
  actionChangeInputMailValue,
  actionChangeInputCreatePasswordValue,
  actionChangeInputConfirmPasswordValue,
  actionSignupIsVisible,
  actionClearInputSignup,
  actionSigninIsVisible,
  actionSignup,
  actionIsLoading,
  actionErrorMessage,
  actionClearErrorMessage,
} from 'src/actions';

function Signup() {
  // const State = useSelector((state) => state);
  const inputNameValue = useSelector((state) => state.inputSignup.name);
  const inputFirstNameValue = useSelector((state) => state.inputSignup.firstname);
  const inputNickNameValue = useSelector((state) => state.inputSignup.nickname);
  const inputMailValue = useSelector((state) => state.inputSignup.mail);
  const inputCreatePasswordValue = useSelector((state) => state.inputSignup.createpassword);
  const inputConfirmPasswordValue = useSelector(
    // eslint-disable-next-line function-paren-newline
    (state) => state.inputSignup.confirmpassword);
  const errorMessage = useSelector((state) => state.errorMessage);
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
  const handleChangeMail = (event) => {
    dispatch(
      actionChangeInputMailValue(event.target.value),
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
    // console.log(State);
    event.preventDefault();

    // au submit on doit check:
    // que les mdp soit egaux
    // que les champ soit remplis
    let check = 0;
    let error = [];

    if (inputNameValue !== '') {
      // eslint-disable-next-line no-plusplus
      check++;
    }

    if (inputFirstNameValue !== '') {
      // eslint-disable-next-line no-plusplus
      check++;
    }

    if (inputNickNameValue !== '') {
      // eslint-disable-next-line no-plusplus
      check++;
    }
    if (inputMailValue !== '') {
      // eslint-disable-next-line no-plusplus
      check++;
    }

    if (inputCreatePasswordValue !== '') {
      // eslint-disable-next-line no-plusplus
      check++;
    }

    if (inputConfirmPasswordValue !== '') {
      // eslint-disable-next-line no-plusplus
      check++;
    }
    if (inputCreatePasswordValue === inputConfirmPasswordValue) {
      // eslint-disable-next-line no-plusplus
      check++;
    }
    else {
      error += 'Les mots de passe ne correspondent pas';
    }

    if (check < 6) {
      error = 'Veuillez remplir tous les champs';
    }

    if (check === 7) {
      dispatch(actionIsLoading(true));
      dispatch(actionSignup());
      dispatch(actionSignupIsVisible(false));
      dispatch(actionClearInputSignup());
      dispatch(actionSigninIsVisible(true));
    }
    else {
      dispatch(actionErrorMessage(error));
      dispatch(actionSigninIsVisible(false));
    }
  };
  const handleCancelClick = () => {
    dispatch(actionClearErrorMessage());
    dispatch(actionClearInputSignup());
    dispatch(actionSignupIsVisible(false));
    dispatch(actionIsLoading(false));
  };
  return (
    <main className="modale">
      <section className="modale-signup">
        <div className="modale-signup-page">
          <h3 className="modale-signup-page-title">Inscription</h3>
          <article>
            <form onSubmit={handleSubmit} className="signup-input-container">
              {errorMessage !== '' && <p className="error-message">{errorMessage}</p>}
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
                    <input value={inputMailValue} onChange={handleChangeMail} required="" id="inputMail" type="email" name="email" placeholder="Email" autoComplete="off" className="input-signup" />
                  </label>
                  <label htmlFor="inputCreatePassword" className="signup-user-label">
                    <input value={inputCreatePasswordValue} onChange={handleChangeCreatePassword} required="" id="inputCreatePassword" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="input-signup" />
                  </label>
                  <label htmlFor="inputConfirmPassword" className="signup-user-label">
                    <input value={inputConfirmPasswordValue} onChange={handleChangeConfirmPassword} required="" id="inputConfirmPassword" type="password" name="password" placeholder="Confirmer le mot de passe" autoComplete="off" className="input-signup" />
                  </label>
                </section>
              </section>
              <button type="submit" className="creation-account-button">Créer un compte</button>
              <button onClick={handleCancelClick} type="button" className="signup-button-cancel">Annuler</button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Signup;
