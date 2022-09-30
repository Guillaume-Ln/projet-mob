import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionLogin,
  actionClearInputLogin,
  actionChangeInputLoginConnexionValue,
  actionChangeInputPasswordConnexionValue,
  actionSigninIsVisible,
  actionClearErrorMessage,
  actionIsLoading,
} from 'src/actions';

function Login() {
  // todo utiliser isLoading pour mettre un loader
  // const isLoading = useSelector((state) => state.isLoading);
  const inputLoginValue = useSelector((state) => state.inputConnexion.login);
  const inputPasswordValue = useSelector((state) => state.inputConnexion.password);
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();

  const handleChangeLogin = (event) => {
    dispatch(
      actionChangeInputLoginConnexionValue(event.target.value),
    );
  };

  const handleChangePassword = (event) => {
    dispatch(
      actionChangeInputPasswordConnexionValue(event.target.value),
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // on suprime le comportement par default
    dispatch(actionIsLoading(true)); // on entre en chargement
    dispatch(actionLogin()); // on demande a ce loggué
  };

  const handleCancelClick = () => {
    dispatch(actionSigninIsVisible(false)); // on ferme la modale
    dispatch(actionClearInputLogin()); // on néttoie les inputs login/password
    dispatch(actionClearErrorMessage()); // on néttoie le message d'erreur
    dispatch(actionIsLoading(false)); // on n'est plus en chargement
  };

  return (
    <main className="modal">
      <section className="modal-connection">
        <div className="modal-connection-page">
          <h3 className="modal-connection-page-title">Connexion</h3>
          <article>
            <form onSubmit={handleSubmit} className="modal-connection-input-container">
              <section className="main-connection-input-container-header">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                {errorMessage !== '' && <p className="error-message">{errorMessage}</p>}
              </section>
              <div className="input-group">
                <label htmlFor="inputLogin" className="input-group-label">
                  <input value={inputLoginValue} onChange={handleChangeLogin} required="" id="inputLogin" type="email" name="email" placeholder="Identifiant" autoComplete="on" className="input-connection" />
                </label>
              </div>
              <div className="input-group">
                <label htmlFor="inputPassword" className="input-group-label">
                  <input value={inputPasswordValue} onChange={handleChangePassword} required="" id="inputPassword" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="input-connection" />
                </label>
              </div>
              <button type="submit" className="connection-button">Se connecter</button>
              <button onClick={handleCancelClick} type="button" className="connection-button-cancel">Annuler</button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Login;
