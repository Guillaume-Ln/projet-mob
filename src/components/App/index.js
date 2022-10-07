// == Import
import { Route, Routes } from 'react-router-dom';
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
// == Import actions
import { actionAjaxTournaments, actionRelogMe } from '../../actions';

// == Composant
function App() {
  const dispatch = useDispatch();
  const signinIsVisible = useSelector((state) => state.signinIsVisible);
  const signupIsVisible = useSelector((state) => state.signupIsVisible);

  useEffect(() => {
    dispatch(actionAjaxTournaments());

    // si on a un token, on se relog.
    if (localStorage.getItem('authorization')) {
      dispatch(actionRelogMe());
    }
  });

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
