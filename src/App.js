import React from 'react';
import './App.css';
import LiberoTopNavBar from './application/components/LiberoTopNavBar';
import LiberoBottomBar from './application/components/LiberoBottomBar';
import AboutApp from './application/screens/AboutApp';
import HomeScreen from './application/screens/HomeScreen';
import Insurance from './application/screens/Insurance';
import SocialMedia from './application/components/SocialMedia';
import HomeSlider from './application/screens/HomeSlider';

function App() {
  return (
    <div className="App" >
      <LiberoTopNavBar />
      <div style={{ flex: 1 }} className="App-content" >
        <HomeSlider />
        <Insurance />
        <SocialMedia />
        <HomeScreen />
        <AboutApp />
      </div>
      <LiberoBottomBar />
    </div>
  );
}

export default App;
