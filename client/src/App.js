
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { NavBar } from './components/NavBar'
import { Stats } from './components/Stats';
import { Megyek } from './components/Megyek';

function App() {


 
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/megyek" element={<Megyek />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
