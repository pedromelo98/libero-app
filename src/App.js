import React from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import LiberoTopNavBar from './application/components/LiberoTopNavBar';
import LiberoBottomBar from './application/components/LiberoBottomBar';
import SocialMedia from './application/components/SocialMedia';
import './App.css';

function App(props) {
  return (
    <div className="App" >
      <LiberoTopNavBar />
      <BrowserView>
        <SocialMedia />
      </BrowserView>
      {isMobile
        ?
        <div className="App-content-mobile" >
          {props.children}

        </div>
        :
        <div className="App-content" >
          {props.children}

        </div>
      }

      <MobileView>
        <LiberoBottomBar />
      </MobileView>
    </div>
  );
}

export default App;