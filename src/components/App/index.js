// == Import
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// == Import components
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Signup from '../Signup';
import Error404 from '../Error404Page';
import Home from '../Home';
import CreateTournament from '../CreateTournament';
import Tournaments from '../Tournaments';
import Tournament from '../Tournament';
import { actionAjaxTournaments, actionRelogMe } from '../../actions';

// == Composant
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const signinIsVisible = useSelector((state) => state.signinIsVisible);
  const signupIsVisible = useSelector((state) => state.signupIsVisible);

  useEffect(() => {
    dispatch(actionAjaxTournaments());

    if (localStorage.getItem('authorization')) {
      console.log('call api/me');
      dispatch(actionRelogMe());
    }
  },[location.pathname]);
  return (
    <div className="app">
      <Header />
      {signinIsVisible && <Login />}
      {signupIsVisible && <Signup />}
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/newtournament" element={<CreateTournament />} />
        <Route path="/" element={<Home />} />
        <Route path="/tournaments/:id" element={<Tournament />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
