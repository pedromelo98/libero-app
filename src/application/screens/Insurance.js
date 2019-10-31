import React from 'react';
import './Screens.css'
import 'semantic-ui-css/semantic.min.css'

import LiberoSecurityCard from '../components/LiberoSecurityCard'

class Insurance extends React.PureComponent {

    state = {

    }


    render() {
        return (
            <div className="Insurance-component" >
                <div fixedIntro="insurance" className="Intro-font-component" >
                    <p className="Intro-font" >Nossos serviços</p>
                </div>
                <br /><br />
                <div className="Insurance" >
                    <div className="Insurance-categorie" >
                        <LiberoSecurityCard iconName='car' security='CARRO' />
                        <LiberoSecurityCard iconName='motorcycle' security='MOTO' />
                        <LiberoSecurityCard iconName='truck' security='CAMINHÃO' />
                        <LiberoSecurityCard iconName='bicycle' security='BIKE' />
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
}

export default Insurance;
