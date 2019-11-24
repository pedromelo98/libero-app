import React from 'react';
import '../styles/Social.css'
import './Screens.css'

import { Icon, Button } from 'semantic-ui-react'

class Social extends React.Component {

    state = {

    }

    render() {
        return (
            <div className="Social" >
                <p className="Intro-font" >Redes sociais:</p>
                <div className="Socials" >
                    <div className="Social-item" >
                        <Button className="Social-button" size='big' color='green'>
                            <Icon name='whatsapp square' /> Whatsapp
                        </Button>
                    </div>
                    <div className="Social-item" >
                        <Button className="Social-button" size='big'  color='facebook'>
                            <Icon name='facebook' /> liberoseguros
                        </Button>
                    </div>
                    <div className="Social-item" >
                        <Button className="Social-button" size='big'  color='instagram'>
                            <Icon name='instagram' /> @liberoseguros
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;
