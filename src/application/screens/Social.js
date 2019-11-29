import React from 'react';
import '../styles/Social.css';
import './Screens.css';
import { Icon, Button } from 'semantic-ui-react';


class Social extends React.Component {

    render() {
        return (
            <div className="Social" >
                <p className="Intro-font" >Redes sociais:</p>
                <div className="Socials" >
                    <a href="https://wa.me/5534998896000" className="Social-item" >
                        <Button className="Social-button" size='big' color='green'>
                            <Icon name='whatsapp square' /> Whatsapp
                        </Button>
                    </a>
                    <a href="https://pt-br.facebook.com/liberoseguros/" className="Social-item" >
                        <Button className="Social-button" size='big' color='facebook'>
                            <Icon name='facebook' /> liberoseguros
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/liberoseguros/" className="Social-item" >
                        <Button className="Social-button" size='big' color='instagram'>
                            <Icon name='instagram' /> @liberoseguros
                        </Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Social;