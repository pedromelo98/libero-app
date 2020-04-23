import React from 'react';
import '../styles/Footer.css';
import { Icon } from 'semantic-ui-react';
import { isBrowser } from 'react-device-detect';


class Footer extends React.Component {

    scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    render() {
        if (isBrowser) {
            return (
                <div className="Footer" >
                    <div onClick={() => this.scrollToTop()} className="BackToTop" >
                        <Icon className="Button-Top" size="big" name="chevron circle up" />
                    </div>
                    <div className="Display-Row" >
                        <div className="Flex-Um" >
                            <div>
                                <p className="Title-Footer" >Contato:</p>
                                <p className="Subtitle-Footer" ><Icon name="phone" /> (34) 3322-6000</p>
                                <p className="Subtitle-Footer" ><Icon name="mail" /> libero@liberocorretora.com.br</p>
                            </div>
                        </div>
                        <div className="Flex-Um" >
                            <img className="Logo-Image" src={require("../images/libero-logo.png")} />
                        </div>
                        <div className="Flex-Um" >
                            <div className="Component-Locdata" >
                                <p className="Title-Footer" >Endereço:</p>
                                <p className="Subtitle-Footer" > Uberaba - MG, Av Leopoldino de Oliveira, 5100, loja 130 , Praça Shopping Uberaba</p>
                                <p className="Subtitle-Footer" >Bairro Vila Olímpica</p>
                                <p className="Subtitle-Footer" >CEP: 38060-000</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <></>
    }


}

export default Footer;