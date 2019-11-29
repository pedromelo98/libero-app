import React from 'react';
import './Screens.css';
import '../styles/Insurances.css';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import LiberoSecurityCard from '../components/LiberoSecurityCard';
import InsuranceBox from '../components/InsuranceBox.js';

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
                            <Link to="/insurance">
                                <LiberoSecurityCard iconName='car' security='CARRO' />
                                <LiberoSecurityCard iconName='motorcycle' security='MOTO' />
                                <LiberoSecurityCard iconName='truck' security='CAMINHÃO' />
                                <LiberoSecurityCard iconName='bicycle' security='BIKE' />
                            </Link>
                        </div>
                        <div className="Insurance-categorie" >
                            <LiberoSecurityCard iconName='home' security='RESIDENCIAL' />
                            <LiberoSecurityCard iconName='warehouse' security='EMPRESA' />
                            <LiberoSecurityCard iconName='building' security='CONDOMÍNIO' />
                            <LiberoSecurityCard iconName='plane' security='VIAGEM' />

                        </div>
                        <div className="Insurance-categorie" >
                            <LiberoSecurityCard iconName='heart' security='VIDA INDIVIDUAL' />
                            <LiberoSecurityCard iconName='users' security='VIDA GLOBAL' />
                            <LiberoSecurityCard iconName='doctor' security='ODONTOLÓGICO' />
                            <LiberoSecurityCard iconName='plus circle' security='DIVERSOS' />
                        </div>
                    </div>
                </div>
            );
        }
        return  <InsuranceBox />;
    }
}

export default Insurance;