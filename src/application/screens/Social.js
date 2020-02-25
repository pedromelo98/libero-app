import React from 'react';
import '../styles/Social.css';
import './Screens.css';
import { Icon } from 'semantic-ui-react';


class Social extends React.Component {

    render() {
        return (
            <div className="Social" >
                <p className="Intro-font" >Redes sociais:</p>
                <div className="Socials" >
                    <a target="_blank" href="https://wa.me/5534998896000" className="Social-item" >
                        <div social="Whats" className="Social-button">
                            <Icon name='whatsapp' size="large" /> whatsapp
                        </div>
                    </a>
                    <a target="_blank" href="https://pt-br.facebook.com/liberoseguros/" className="Social-item" >
                        <div social="Face" className="Social-button">
                            <Icon name='facebook f' size="large" /> liberoseguros
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/liberoseguros/" className="Social-item" >
                        <div social="Insta" className="Social-button">
                            <Icon name='instagram' size="large" /> @liberoseguros
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Social;