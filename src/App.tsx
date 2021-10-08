import React, { useState } from 'react';
import './App.css';
import { Routes } from './util/routes';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import { Backdrop, Navbar, SideDrawer } from './components';

function App() {

  const [sideToggle, setSideToogle] = useState<boolean>(false);

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar click={() => setSideToogle(true)} />
        {/* SideDrawer for mobile */}
        <SideDrawer show={sideToggle} click={() => setSideToogle(false)} />
        {/* Backdrop */}
        <Backdrop show={sideToggle} click={() => setSideToogle(false)} />
        <main>
          <Routes />
        </main>
        {/* Homescreen */}
        {/* Product screen */}
        {/* CartScreen */}
      </div>
    </Router>
  );
}

export default App;
