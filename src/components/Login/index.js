import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionLogin,
  actionClearInputLogin,
  actionChangeInputLoginConnexionValue,
  actionChangeInputPasswordConnexionValue,
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
  };

  return (
    <section className="main-connection">
      <div className="main-connection-page">
        <h3 className="main-connection-page-title">Connexion</h3>
        <article>
          <form onSubmit={handleSubmit} className="main-connection-input-container">
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
          </form>
        </article>
      </div>
    </section>
  );
}

export default Login;
