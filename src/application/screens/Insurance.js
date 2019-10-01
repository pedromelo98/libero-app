import React from 'react';
import './Screens.css'
import { Divider } from 'semantic-ui-react'

class Insurance extends React.PureComponent {

    state = {

    }


    render() {
        return (
            <div id="baixeapp" className="Baixe-app" >
                <Divider />
                <text className="Baixe-app-font" >Consulte nossos serviços:</text>
                <br /><br />
                <div className="Img" >
                    <img width={800} src={require('../images/libero-capa.png')} />
                </div>

            </div>

        );
    }
}

export default Insurance;
