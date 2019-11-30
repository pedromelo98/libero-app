import React from 'react';
import './Screens.css';
import '../styles/Insurances.css';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import LiberoSecurityCard from '../components/LiberoSecurityCard';
import InsuranceBox from '../components/InsuranceBox.js';

import * as LINKS from '../constants/Links'

class Insurance extends React.PureComponent {

    render() {
        if (isMobile) {
            return (
                <div className="Insurance-component" >
                    <div fixedintro="insurance" className="Intro-font-component" >
                        <p className="Intro-font" >Nossos serviços</p>
                    </div>
                    <br /><br />
                    <div className="Insurance" >
                        <div className="Insurance-categorie" >
                                <LiberoSecurityCard iconName='car' security='CARRO' link={"/seguro/carro"} />
                                <LiberoSecurityCard iconName='laptop' security='PORTATEIS' link={LINKS.LINK_PORTATEIS}  />
                                <LiberoSecurityCard iconName='truck' security='CARGAS' />
                                <LiberoSecurityCard iconName='bicycle' security='BIKE' />
                        </div>
                        <div className="Insurance-categorie" >
                            <LiberoSecurityCard iconName='home' security='RESIDENCIAL' link={LINKS.LINK_RESIDENCIAL} />
                            <LiberoSecurityCard iconName='warehouse' security='EMPRESA' />
                            <LiberoSecurityCard iconName='building' security='CONDOMÍNIO' />
                            <LiberoSecurityCard iconName='plane' security='VIAGEM' link={LINKS.LINK_VIAGEM}  />

                        </div>
                        <div className="Insurance-categorie" >
                            <LiberoSecurityCard iconName='heart' security='VIDA INDIVIDUAL' link={LINKS.LINK_VIDA_INDIVIDUAL}  />
                            <LiberoSecurityCard iconName='users' security='VIDA GLOBAL' />
                            <LiberoSecurityCard iconName='doctor' security='ODONTOLÓGICO' link={LINKS.LINK_ODONTOLOGICO}  />
                            <LiberoSecurityCard iconName='calculator' security='FINANCIAMENTOS' />
                        </div>
                    </div>
                </div>
            );
        }
        return  <InsuranceBox />;
    }
}

export default Insurance;