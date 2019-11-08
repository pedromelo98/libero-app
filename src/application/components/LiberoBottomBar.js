import React from 'react';
import '../../App.css'
import { Icon } from 'semantic-ui-react'

class LiberoBottomBar extends React.PureComponent {

    render() {
        return (
            <div className="Bottom-bar" >
                <div conteudo="bottom" >
                    <div className="Bottom-Flex" >
                        {//<p className="Responsive-Text" ><Icon name="phone" />(34)3322-6000</p>
                        }
                        <p className="Responsive-Text" ><Icon name="mail" />e-mail</p>
                        <a link="bottom" href="https://www.google.com/maps/place/L%C3%8DBERO+CORRETORA+DE+SEGUROS/@-19.7454077,-47.9305714,19.16z/data=!4m5!3m4!1s0x94bad02d37e47395:0x62a6f71c14af25d1!8m2!3d-19.745298!4d-47.930417" ><p className="Responsive-Text" ><Icon name="map marker alternate" />Localização</p></a>
                    </div>

                    <div className="Bottom-Flex" >
                        <img alt="logo libero" src={require("../images/libero-logo.png")} logo="bottom" />
                    </div>

                    <div className="Bottom-Flex" >
                        <a link="bottom" href="https://pt-br.facebook.com/liberoseguros/" ><p className="Responsive-Text" ><Icon name="facebook official" />facebook</p></a>
                        <a link="bottom" href="https://www.instagram.com/liberoseguros/" ><p className="Responsive-Text" ><Icon name="instagram" />Instagram</p></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default LiberoBottomBar;
