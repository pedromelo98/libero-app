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
                            titlePhrase={"Solicite nossa proposta!"}
                            img={require('../images/trator.jpg')}
                            redirect={LINKS.REDIRECT_OTHERS}
                            title="Seguro para Riscos Agrícolas"
                        />
                    );
                case LINKS.LINK_CARGAS:
                    return (
                        <RenderIntro
                            callInsurance={"cargas"}
                            titlePhrase={"Solicite nossa proposta!"}
                            img={require('../images/truck.jpg')}
                            redirect={LINKS.REDIRECT_OTHERS}
                            title="Seguro de Cargas"
                        />
                    );
                case LINKS.LINK_RESIDENCIAL:
                    return (
                        <RenderIntro
                            callInsurance={"empresarial"}
                            titlePhrase={"Solicite nossa proposta!"}
                            img={require('../images/house.jpg')}
                            redirect={LINKS.REDIRECT_RESIDENCIAL}
                            haveForm={true}
                            title="Seguro Residencial"
                        />
                    );
                case LINKS.LINK_EMPRESARIAL:
                    return (
                        <RenderIntro
                            callInsurance={"empresarial"}
                            titlePhrase={"Solicite nossa proposta!"}
                            img={require('../images/empresa.jpg')}
                            redirect={LINKS.REDIRECT_EMPRESARIAL}
                            haveForm={true}
                            title="Seguro Empresarial"
                        />
                    );
                case LINKS.LINK_CONDOMINIO:
                    return (
                        <RenderIntro
                            callInsurance={"empresarial"}
                            titlePhrase={"Solicite nossa proposta!"}
                            img={require('../images/condominio.jpg')}
                            redirect={LINKS.REDIRECT_CONDOMINIO}
                            haveForm={true}
                            title="Seguro para Condomínios"
                        />
                    );
                case LINKS.LINK_VIDA_INDIVIDUAL:
                    return (
                        <>
                            <RenderIntro
                                callInsurance={"vida"}
                                titlePhrase={"Solicite nossa proposta!"}
                                img={require('../images/life.jpg')}
                                redirect={LINKS.REDIRECT_VIDA_GLOBAL}
                                haveForm={true}
                                title="Seguro de Vida individual"
                            />
                            <RenderIntro
                                callInsurance={"vidaglobal"}
                                titlePhrase={"Solicite nossa proposta!"}
                                img={require('../images/grupo.jpg')}
                                redirect={LINKS.REDIRECT_VIDA_GLOBAL}
                                haveForm={true}
                                title="Seguro de Vida em grupo"
                            />
                        </>
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
