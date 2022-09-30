// == Import
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Home from '../Home';

import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
