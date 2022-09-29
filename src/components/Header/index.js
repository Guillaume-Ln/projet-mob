import { NavLink, Link, useNavigate } from 'react-router-dom';
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { actionChangeInputSearchValue } from 'src/actions';

import logo from '../../assets/images/logo_mob.png';

function Header() {
  const checkIsActive =({ isActive }) => isActive ? 'nav-bar-link nav-bar-link--active':'nav-bar-link';
  const navigate = useNavigate();

  const inputSearchValue = useSelector((state) => state.inputSearch.searchable);
  const dispatch = useDispatch();

  const handleChangeSearch = (event) => {
    dispatch(
      actionChangeInputSearchValue(event.target.value),
    );
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
        <button type="button" className="header-account pointer" onClick={() => navigate('/login')/* handleConnectionButton */}>Se connecter</button>
        <button type="button" className="header-account pointer" onClick={() => navigate('/signup')}>S'inscrire</button>
        <span className="material-symbols-outlined logo-account pointer">
          account_circle
        </span>
      </section>
      <span className="material-symbols-rounded header-menu">menu</span>
    </header>
  );
}

export default Header;
