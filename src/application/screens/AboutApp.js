import React from 'react';
import './Screens.css'
import 'semantic-ui-css/semantic.min.css'

class AboutApp extends React.PureComponent {

    state = {

    }


    render() {
        return (
            <div  >
                <text className="Baixe-app-font" >Conheça nosso aplicativo:</text>
                <br /><br />
                <div className="Img" >
                    <img width={800} src={require('../images/libero-capa.png')} />
                </div>

            </div>

        );
    }
}

export default AboutApp;
