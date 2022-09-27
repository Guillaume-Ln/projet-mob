import './style.scss';
import logo from '../../assets/images/logo_mob.png';

function Header() {
  return (
    <header className="header">
      <img className="logo-header pointer" src={logo} alt="logo MOB" />
      <nav className="nav-bar">
        <a href="">Les Tournois</a>
        <a href="">Créer un tournoi</a>
        <a href="">Mes tournois</a>
      </nav>
      <section className="header-search">
        <span className="material-symbols-outlined header-search-button pointer">search</span>
        <input title="Rechercher" aria-label="Rechercher" required="" id="inputHeader" type="text" name="text" placeholder="Rechercher..." autoComplete="on" className="input" />
      </section>
      <section className="header-account">
        <button type="button" className="header-account pointer">Se connecter</button>
        <button type="button" className="header-account pointer">S'inscrire</button>
        <span className="material-symbols-outlined logo-account pointer">
          account_circle
        </span>
      </section>
      <span className="material-symbols-rounded header-menu">menu</span>
    </header>
  );
}

export default Header;
