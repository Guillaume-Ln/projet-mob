import { NavLink, Link, useNavigate } from 'react-router-dom';
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputSearchValue,
  actionSigninIsVisible,
  actionSignupIsVisible,
  actionDisconnect,
} from 'src/actions';

import logo from '../../assets/images/logo_mob.png';

function Header() {
  const checkIsActive = ({ isActive }) => (isActive ? 'nav-bar-link nav-bar-link--active' : 'nav-bar-link');

  const inputSearchValue = useSelector((state) => state.inputSearch.searchable);
  const isConnected = useSelector((state) => state.isConnected);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeSearch = (event) => {
    dispatch(actionChangeInputSearchValue(event.target.value));
  };
  const handleConnectionButton = () => {
    dispatch(actionSigninIsVisible(true));
  };
  const handleSignupButton = () => {
    dispatch(actionSignupIsVisible(true));
  };
  const handleDisconnectClick = () => {
    dispatch(actionDisconnect());
  };
  const handleProfileClick = () => {
    navigate(`profiles/:${user.id}`);
  };
  return (
    <header className="header">
      <Link to="/"><img className="logo-header pointer" src={logo} alt="logo MOB" /></Link>
      <nav className="nav-bar">
        <NavLink to="/tournaments" className={checkIsActive}>Les Tournois</NavLink>
        <NavLink to="/newtournament" className={checkIsActive}>Créer un tournoi</NavLink>
        <NavLink to="/mytournaments" className={checkIsActive}>Mes tournois</NavLink>
      </nav>
      <section className="header-search">
        <span className="material-symbols-outlined header-search-button pointer">search</span>
        <input value={inputSearchValue} onChange={handleChangeSearch} required="" id="inputSearch" type="text" name="text" placeholder="Rechercher..." autoComplete="on" className="input" />
      </section>
      <section className="header-account">
        {!isConnected && <button type="button" className="header-account pointer" onClick={handleConnectionButton}>Se connecter</button> }
        {!isConnected && <button type="button" className="header-account pointer" onClick={handleSignupButton}>S'inscrire</button>}
        {isConnected && (
          <div className="profil-connected">
            <span onClick={handleProfileClick} className="material-symbols-outlined logo-account pointer">
              account_circle
            </span>
            <p>Bonjour {user.nickname}.</p>
            <p onClick={handleDisconnectClick} className="profil-connected-disconnect pointer">Déconnexion</p>
          </div>
        )}

      </section>
      <span className="material-symbols-rounded header-menu">menu</span>
    </header>
  );
}

export default Header;
