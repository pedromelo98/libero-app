import React from 'react';
import './Screens.css';
import '../styles/Insurances.css';
import 'semantic-ui-css/semantic.min.css';

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
                            <LiberoSecurityCard iconName='car' security='AUTO' link={LINKS.LINK_AUTO} componentLink={true} />
                            <LiberoSecurityCard iconName='laptop' security='PORTATEIS' link={LINKS.LINK_PORTATEIS} />
                            <LiberoSecurityCard iconName='truck' security='CARGAS' link={LINKS.LINK_CARGAS} componentLink={true} />
                            <LiberoSecurityCard iconName='bicycle' security='BIKE' link={LINKS.LINK_BIKE} />
                        </div>
                        <div className="Insurance-categorie" >
                            <LiberoSecurityCard iconName='home' security='RESIDENCIAL' link={LINKS.LINK_RESIDENCIAL} />
                            <LiberoSecurityCard iconName='warehouse' security='EMPRESA' link={LINKS.LINK_EMPRESARIAL} componentLink={true} />
                            <LiberoSecurityCard iconName='building' security='CONDOMÍNIO' link={LINKS.LINK_CONDOMINIO} componentLink={true} />
                            <LiberoSecurityCard iconName='plane' security='VIAGEM' link={LINKS.LINK_VIAGEM} />

                        </div>
                        <div className="Insurance-categorie" >
                            <LiberoSecurityCard iconName='heart' security='VIDA' link={LINKS.LINK_VIDA_INDIVIDUAL} />
                            <LiberoSecurityCard iconName='leaf' security='RISCOS AGRÍCOLAS' link={LINKS.LINK_AGRICOLAS} componentLink={true} />
                            <LiberoSecurityCard iconName='doctor' security='ODONTOLÓGICO' link={LINKS.LINK_ODONTOLOGICO} />
                            <LiberoSecurityCard iconName='calculator' security='FINANCIAMENTOS' link={LINKS.LINK_FINANCIAMENTOS} componentLink={true} />
                        </div>
                    </div>
                </div>
            );
        }
        return <InsuranceBox />;
    }
}

export default Insurance;