import { NavLink, Link } from 'react-router-dom';
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputSearchValue,
  actionSigninIsVisible,
  actionSignupIsVisible,
  actionDisconnect,
  actionGetAllProfiles,
  actionAjaxTournaments,
} from 'src/actions';
import { useEffect } from 'react';
import logo from '../../assets/images/logo_mob.png';

function Header() {
  const checkIsActive = ({ isActive }) => (isActive ? 'nav-bar-link nav-bar-link--active' : 'nav-bar-link');

  const inputSearchValue = useSelector((state) => state.inputSearch.searchable);
  const isConnected = useSelector((state) => state.isConnected);
  const user = useSelector((state) => state.user);
  const dataSearch = useSelector((state) => state.dataSearch);
  const tournaments = useSelector((state) => state.tournaments);
  const dispatch = useDispatch();

  console.log('dataSearch', dataSearch);
  console.log('tournaments', tournaments);

  const handleChangeSearch = (event) => {
    dispatch(actionChangeInputSearchValue(event.target.value));
    dispatch(actionGetAllProfiles());
    dispatch(actionAjaxTournaments());
  };
  // a chaque input on doit chercher dans notre bdd si il y a une correspondance
  // faire les 2 AJAX (check)
  // => Tournament & profiles (check)
  // mettre dans state : search.data
  // recup les infos dans le header => use.selector
  // trier les infos final => filter/includes...
  // display info dans une modale
  const compareSearch = [];
  useEffect(() => {
    dataSearch.forEach((data) => {
      if (JSON.stringify(data).toLocaleLowerCase().includes(inputSearchValue.toLocaleLowerCase())) {
        compareSearch.push(data);
      }
    });
  }, [dataSearch]);

  useEffect(() => {
    tournaments.forEach((tournament) => {
      // eslint-disable-next-line max-len
      if (JSON.stringify(tournament).toLocaleLowerCase().includes(inputSearchValue.toLocaleLowerCase())) {
        compareSearch.push(tournament);
      }
    });
  }, [tournaments]);

  useEffect(() => {
    console.log('compareSearch', compareSearch);
  }, [compareSearch]);

  // const resultSearch = compareSearch.map((nickname, i) => {
  //   return  <ul>{nickname} key= {i}
  // })

  const handleConnectionButton = () => {
    dispatch(actionSigninIsVisible(true));
  };
  const handleSignupButton = () => {
    dispatch(actionSignupIsVisible(true));
  };
  const handleDisconnectClick = () => {
    dispatch(actionDisconnect());
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
        {/*         { compareSearch.length > 0 && (
          <section className="search-results">
            <div className="search-results-nickname"> Pseudo
              <ul>{compareSearch.map((search) => (
                <li key={search.id}>{search.nickname}</li>
              ))}
              </ul>
            </div>
            <div>
              <div className="search-results-tournament">Tournois</div>
            </div>
          </section>
        )} */}

        {inputSearchValue.length >= 1 && (
          <div className="search">
            <h1 className="search-title">Pseudo</h1>
            <ul>{dataSearch.map((search) => (
              <li className="search-result pointer" key={search.id}> {search.nickname} </li>

            ))}
            </ul>
            <h1 className="search-title">Tournois</h1>
            <ul>{compareSearch.map((search) => (
              <li className="search-result pointer" key={search.id}>{search.label}</li>
            ))}
            </ul>
          </div>
        )}

      </section>
      <section className="header-account">
        {!isConnected && <button type="button" className="header-account pointer" onClick={handleConnectionButton}>Se connecter</button> }
        {!isConnected && <button type="button" className="header-account pointer" onClick={handleSignupButton}>S'inscrire</button>}
        {isConnected && (
          <div className="profil-connected">
            <span className="material-symbols-outlined logo-account pointer">
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
