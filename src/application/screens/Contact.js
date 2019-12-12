import React from 'react';
import '../styles/Contact.css';
import { Icon } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';


class Contact extends React.Component {



    render() {
        if (isMobile) {
            return (
                <div className="Contact" >
                    <p className="Intro-font" >Entre em contato conosco:</p>
                    <div className="Container-Mobile" >
                        <a href="https://maps.google.com/?q=LÍBERO CORRETORA DE SEGUROS - Rua Padre Zeferino - Estados Unidos, Uberaba - MG" align="right" className="Contacts" >
                            <Icon name='map marker alternate' size='big' />
                            <div className="Contact-item" >
                                <p className="Contact-font" >Uberaba - MG, R. Padre Zeferino, 542</p>
                            </div>
                            <div className="Contact-item" >
                                <p className="Contact-font" >Bairro Estados Unidos</p>
                            </div>
                            <div className="Contact-item" >
                                <p className="Contact-font" >CEP: 38015-160</p>
                            </div>
                        </a>

                        <div className="Contacts" >
                            <div align="left" className="Contact-item" >
                                <Icon name='phone' size='big' />
                                <p className="Contact-font" >(34) 3322-6000</p>
                            </div>
                            <div align="left" className="Contact-item" >
                                <Icon name='envelope' size='big' />
                                <p className="Contact-font" >libero@liberocorretora.com.br</p>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        return (
            <div className="Contact" >
                <p className="Intro-font" >Entre em contato conosco:</p>
                <div className="Container" >

                    <div align="right" className="Contacts" >
                        <Icon name='map marker alternate' size='big' />
                        <div className="Contact-item" >
                            <p className="Contact-font" >Uberaba - MG, R. Padre Zeferino, 542</p>
                        </div>
                        <div className="Contact-item" >
                            <p className="Contact-font" >Bairro Estados Unidos</p>
                        </div>
                        <div className="Contact-item" >
                            <p className="Contact-font" >CEP: 38015-160</p>
                        </div>
                    </div>

                    <a target="_blank" href="https://maps.google.com/?q=LÍBERO CORRETORA DE SEGUROS - Rua Padre Zeferino - Estados Unidos, Uberaba - MG" className="Img-location" >
                        <div className="Overlay-Button" >
                            <p className="Button-Text" >Visualizar no mapa</p>
                        </div>
                        <img className="Libero-Location" src={require("../images/liberoloc.png")} />
                    </a>

                    <div className="Contacts" >
                        <div align="left" className="Contact-item" >
                            <Icon name='phone' size='big' />
                            <p className="Contact-font" >(34) 3322-6000</p>
                        </div>
                        <div align="left" className="Contact-item" >
                            <Icon name='envelope' size='big' />
                            <p className="Contact-font" >libero@liberocorretora.com.br</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}

export default Contact;