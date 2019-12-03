import React from 'react';
import { withRouter } from 'react-router-dom';
import * as LINKS from '../constants/Links'
import RenderIntro from './Insurance-Intro';

class CallInsurances extends React.PureComponent {

    renderInsuranceByPath() {
        if (this.props.location) {
            switch (this.props.location.pathname) {
                case LINKS.LINK_AUTO:
                    return (
                        <RenderIntro
                            callInsurance={"auto"}
                            titlePhrase={"Solicite a nossa proposta!"}
                            img={require('../images/carro.jpg')}
                            redirect={LINKS.REDIRECT_AUTO}
                            haveForm={true}
                            title="Seguro Auto Individual"
                        />
                    );
                case LINKS.LINK_AGRICOLAS:
                    return (
                        <RenderIntro
                            callInsurance={"agricolas"}
                            titlePhrase={"Proteja seu patrimônio!"}
                            img={require('../images/trator.jpg')}
                            redirect={LINKS.REDIRECT_OTHERS}
                            title="Seguro para Riscos Agrícolas"
                        />
                    );
                case LINKS.LINK_CARGAS:
                    return (
                        <RenderIntro
                            callInsurance={"cargas"}
                            titlePhrase={"Proteja suas cargas!"}
                            img={require('../images/truck.jpg')}
                            redirect={LINKS.REDIRECT_OTHERS}
                            title="Seguro de Cargas"
                        />
                    );
                case LINKS.LINK_EMPRESARIAL:
                    return (
                        <RenderIntro
                            callInsurance={"empresarial"}
                            titlePhrase={"Proteja sua empresa!"}
                            img={require('../images/empresa.jpg')}
                            redirect={LINKS.REDIRECT_EMPRESARIAL}
                            title="Seguro Empresarial"
                        />
                    );
                case LINKS.LINK_CONDOMINIO:
                    return (
                        <RenderIntro
                            callInsurance={"condominio"}
                            titlePhrase={"Proteja seu condomínio!"}
                            img={require('../images/condominio.jpg')}
                            redirect={LINKS.REDIRECT_CONDOMINIO}
                            title="Seguro de Condomínio"
                        />
                    );
                case LINKS.LINK_FINANCIAMENTOS:
                    return (
                        <RenderIntro
                            callInsurance={"financiamentos"}
                            titlePhrase={"Financiamentos seguros!"}
                            img={require('../images/calculadora.jpg')}
                            redirect={LINKS.REDIRECT_OTHERS}
                            title="Seguro para Financiamentos"
                        />
                    );

                default:

                    return (<></>);
            }
        }
    }

    render() {
        return this.renderInsuranceByPath();
    }
}

export default withRouter(CallInsurances);
