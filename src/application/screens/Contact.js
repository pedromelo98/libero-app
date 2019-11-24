import React from 'react';
import '../styles/Social.css'
import './Screens.css'

import { Icon } from 'semantic-ui-react'

class Contact extends React.Component {

    state = {

    }

    render() {
        return (
            <div className="Social" >
                <p className="Intro-font" >Entre em contato conosco:</p>
                <div className="Socials" >
                    <a className="Social-item" >
                        <Icon name='phone' size='huge' />
                        <p className="Social-font" >(34)3322-6000</p>
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

export default Contact;
