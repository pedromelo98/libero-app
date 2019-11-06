import React from 'react';
import './App.css';

import LiberoTopNavBar from './application/components/LiberoTopNavBar'
import LiberoBottomBar from './application/components/LiberoBottomBar'
import AboutApp from './application/screens/AboutApp'
import Insurance from './application/screens/Insurance'

import { Divider } from 'semantic-ui-react'
import SocialMedia from './application/components/SocialMedia';



function App() {
  return (
    <div className="App" >
      <LiberoTopNavBar />
      <div style={{ flex: 1 }} className="App-content" >
        <Insurance />
        <SocialMedia/>
        <AboutApp />
        <AboutApp />
        <AboutApp />
      </div>
      <LiberoBottomBar />
    </div>
  );
}

export default App;
