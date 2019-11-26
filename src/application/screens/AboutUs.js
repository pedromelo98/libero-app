import React from 'react';
import './Screens.css';
import 'semantic-ui-css/semantic.min.css';

class AboutUs extends React.PureComponent {

    render() {
        return (
            <div className="About-Us" >
                <text className="Baixe-app-font" >Quem somos:</text>
                <br /><br />
                <div className="Img" >
                    <img image="aboutUs" src={require('../images/libero-porta.png')} />
                </div>

            </div>

        );
    }
}

export default AboutUs;