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
// == Import actions
import { actionAjaxTournaments } from '../../actions';
import Tournaments from '../Tournaments';

// == Composant
function App() {
  const dispatch = useDispatch();
  const signinIsVisible = useSelector((state) => state.signinIsVisible);
  const signupIsVisible = useSelector((state) => state.signupIsVisible);

  useEffect(() => {
    dispatch(actionAjaxTournaments());
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
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
