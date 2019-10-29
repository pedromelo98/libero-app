import React from 'react';
import './Screens.css'
import 'semantic-ui-css/semantic.min.css'

import LiberoSecurityCard from '../components/LiberoSecurityCard'

class Insurance extends React.PureComponent {

    state = {

    }


    render() {
        return (
            <div className="Insurance" >
                <div className="Insurance-block" >
                    <LiberoSecurityCard iconName='car' security='CARRO' />
                    <LiberoSecurityCard iconName='home' security='RESIDENCIAL' />
                </div>
                <div className="Insurance-block" >
                    <LiberoSecurityCard iconName='motorcycle' security='MOTO' />
                    <LiberoSecurityCard iconName='building' security='EMPRESA' />

                </div>
                <div className="Insurance-block" >
                    <LiberoSecurityCard iconName='truck' security='CAMINHÃO' />
                    <LiberoSecurityCard iconName='building' security='CONDOMÍNIO' />

                </div>

            </div>

        );
    }
}

export default Insurance;
