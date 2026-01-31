import About from './pages/About';
import Photos from './pages/Photos';
import Contact from './pages/Contact';

import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Das ist eine Elternkompomponente für den Sprachwechsel-Schalter und Theme-Schalter
import { ButtonsHider } from '../../mf/src/components/ButtonsHider/ButtonsHider';

const MF1 = React.lazy(() => import("mfe/App"));
const MF2 = React.lazy(() => import("mfe/App2"));

function App() {
  return (
    <Router>
      <ButtonsHider />
      <nav className = 'navBody'>
        <h1 className = 'title'>Explore Upper Austria</h1>
        <div className='navContainer'>
          <ul className='nav-option-list'>
            <li className='nav-option'><Link to="/">About</Link></li>
            <li className='nav-option'><Link to="/photos">Photos</Link></li>
            <li className='nav-option'><Link to="/contact">Contact</Link></li>
            <li className='nav-option'><Link to="/mf1">MF1</Link></li>
            <li className='nav-option'><Link to="/mf2">MF2</Link></li>
          </ul>
        </div>
      </nav>
      <div className='main-text'>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/mf1/*" element={<Suspense fallback={<div>Loading...</div>}> <MF1/></Suspense>}/>
          <Route path="/mf2/*" element={<Suspense fallback={<div>Loading...</div>}> <MF2/></Suspense>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
