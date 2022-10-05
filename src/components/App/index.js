// == Import
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import CreateTournament from '../CreateTournament';

import Tournament from '../Tournament';

// == Composant
function App() {
  const signinIsVisible = useSelector((state) => state.signinIsVisible);
  const signupIsVisible = useSelector((state) => state.signupIsVisible);

  return (
    <div className="app">
      <Header />
      <Tournament />
      {signinIsVisible && <Login />}
      {signupIsVisible && <Signup />}
      <Routes>
        <Route path="/newtournament" element={<CreateTournament />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
