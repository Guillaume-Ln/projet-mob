// == Import
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Login from '../Login';

import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
