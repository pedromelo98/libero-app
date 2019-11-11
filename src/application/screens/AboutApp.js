import React from 'react';
import './Screens.css'
import 'semantic-ui-css/semantic.min.css'

class AboutApp extends React.PureComponent {

    state = {

    }

    render() {
        return (
            <div className="About-App" >
                <p className="Intro-font" >Conheça nosso aplicativo</p>
                <br /><br />
                <div className="Img" >
                    <img src={require('../images/libero-capa.png')} alt="Imagem promocional do App" />
                </div>

            </div>

        );
    }
}

export default AboutApp;
