// == Import
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import Header from '../Header';
import Login from '../Login';

import './styles.css';

// == Composant
function App() {
  const signinIsVisible = useSelector((state) => state.signinIsVisible);

  return (
    <div className="app">
      <Header />
      {signinIsVisible && <Login /> }
      <Footer />
    </div>
  );
}

// == Export
export default App;
