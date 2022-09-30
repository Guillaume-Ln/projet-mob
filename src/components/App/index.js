// == Import
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Home from '../Home';

import './styles.css';

// == Composant
function App() {
  const signinIsVisible = useSelector((state) => state.signinIsVisible);

  return (
    <div className="app">
      <Header />
      {signinIsVisible && <Login /> }
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
