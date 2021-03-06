import React from 'react';

import './Screens.css';
import 'semantic-ui-css/semantic.min.css';

import { Icon } from 'semantic-ui-react';

class AboutApp extends React.PureComponent {

    state = {

    }
    render() {
        return (
            <div className="About-App" >
                <p className="Intro-font" >Conheça nosso aplicativo</p>
                <div className="Component-Buttons" >
                    <a className="App-Button" target="_blank" href="https://play.google.com/store/apps/details?id=br.com.libero" >
                        <Icon size='big' name="google play" />
                        <p>Play Store</p>
                    </a>
                    <a className="App-Button" href="https://apps.apple.com/br/app/l%C3%ADbero-seguros/id1322021570"  >
                        <Icon size='big' name="app store ios" />
                        <p>App Store</p>
                    </a>
                </div>
                <div className="Img" >
                    <img src={require('../images/libero-capa.png')} alt="Imagem promocional do App" />
                </div>

            </div>

        );
    }
}

export default AboutApp;
