import React from 'react';

import { Icon } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import * as LINKS from '../constants/Links'
import RenderIntro from './Insurance-Intro';

class CallInsurances extends React.PureComponent {

    renderInsuranceByPath() {
        if (this.props.location) {
            switch (this.props.location.pathname) {
                case LINKS.LINK_AGRICOLAS:
                    return (
                        <RenderIntro
                            callInsurance={"agricolas"}
                            titlePhrase={"Proteja seu patrimônio!"}
                            img={require('../images/trator.jpg')}
                            title="Seguro para Riscos Agrícolas"
                        />
                    )
                case LINKS.LINK_CARGAS:
                    return (
                        <RenderIntro
                            callInsurance={"cargas"}
                            img={require('../images/truck.jpg')}
                            title="Seguro de Cargas"
                        />
                    )
                case LINKS.LINK_EMPRESARIAL:
                    return (
                        <RenderIntro
                            callInsurance={"empresarial"}
                            img={require('../images/empresa.jpg')}
                            title="Seguro Empresarial"
                        />
                    )
                case LINKS.LINK_CONDOMINIO:
                    return (
                        <RenderIntro
                            callInsurance={"condominio"}
                            img={require('../images/condominio.jpg')}
                            title="Seguro de Condomínio"
                        />
                    )
                case LINKS.LINK_FINANCIAMENTOS:
                    return (
                        <RenderIntro
                            callInsurance={"financiamentos"}
                            img={require('../images/calculadora.jpg')}
                            title="Seguro para Financiamentos"
                        />
                    )
            }
        }
    }

    render() {
        return (
            this.renderInsuranceByPath()
        );
    }
}

export default withRouter(CallInsurances);
