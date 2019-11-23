import React from 'react';
import '../styles/Social.css'
import './Screens.css'

import { Icon } from 'semantic-ui-react'

class Social extends React.Component {

    state = {

    }

    render() {
        return (
            <div className="Social" >
                <p className="Intro-font" >Redes sociais:</p>
                <div className="Socials" >
                    <a className="Social-item" >
                        <Icon name='whatsapp square' size='huge' />
                        <p className="Social-font" >(34) 9 9999-9999</p>
                    </a>
                    <a className="Social-item" >
                        <Icon name='facebook' size='huge' />
                        <p className="Social-font" >liberoseguros</p>
                    </a>
                    <a className="Social-item" >
                        <Icon name='instagram' size='huge' />
                        <p className="Social-font" >@liberoseguros</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Social;
