import './style.scss';

function Login() {
  return (
    <section className="main-connection">
      <div className="main-connection-page">
        <h3 className="main-connection-page-title">Connexion</h3>
        <article>
          <div className="main-connection-input-container">
            <section>
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </section>
            <div className="input-group">
              <label htmlFor="inputLogin" className="input-group-label">
                <input required="" id="inputLogin" type="text" name="text" placeholder="Identifiant" autoComplete="on" className="input-connection" />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="inputPassword" className="input-group-label">
                
                <input required="" id="inputPassword" type="password" name="password" placeholder="Mot de passe" autoComplete="off" className="input-connection" />
              </label>
            </div>
            <button type="button" className="connection-button">Se connecter</button>
          </div>
        </article>
      </div> 
    </section>
  );
}



export default Login;
