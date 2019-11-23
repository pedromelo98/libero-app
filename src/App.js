import React from 'react';
import './App.css';
import LiberoTopNavBar from './application/components/LiberoTopNavBar';
import LiberoBottomBar from './application/components/LiberoBottomBar';

function App(props) {
  return (
    <div className="App" >
      <LiberoTopNavBar />
      <SocialMedia />
      <div style={{ flex: 1 }} className="App-content" >
        {props.children}
      </div>
      <LiberoBottomBar />
    </div>
  );
}

export default App;
