import React from 'react';
import './App.css';
import LiberoTopNavBar from './application/components/LiberoTopNavBar'
import AboutApp from './application/screens/AboutApp'
import Insurance from './application/screens/Insurance';

function App() {
  return (
    <div className="App" >
      <LiberoTopNavBar />
      <div className="App-content" >
        <Insurance />
        <AboutApp />
      </div>
    </div>
  );
}

export default App;
