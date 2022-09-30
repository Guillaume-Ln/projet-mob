import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionLogin,
  actionClearInputLogin,
  actionChangeInputLoginConnexionValue,
  actionChangeInputPasswordConnexionValue,
  actionSigninIsVisible,
} from 'src/actions';

function Login() {
  const inputLoginValue = useSelector((state) => state.inputConnexion.login);
  const inputPasswordValue = useSelector((state) => state.inputConnexion.password);
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
    event.preventDefault();
    dispatch(actionLogin());
    dispatch(actionClearInputLogin());
    // eslint-disable-next-line max-len
    dispatch(actionSigninIsVisible()); // todo gérer la fermeture uniquement si connecté, sinon afficher un message d'erreur.
  };

  const handleCancelClick = () => {
    dispatch(actionSigninIsVisible());
    dispatch(actionClearInputLogin());
  };

  return (
    <main className="modal">
      <section className="modal-connection">
        <div className="modal-connection-page">
          <h3 className="modal-connection-page-title">Connexion</h3>
          <article>
            <form onSubmit={handleSubmit} className="modal-connection-input-container">
              <section>
                <span className="material-symbols-outlined">
                  account_circle
                </span>
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
