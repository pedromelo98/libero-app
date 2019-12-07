import React from 'react';
import './Screens.css';
import '../styles/About.css';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Label, Segment } from 'semantic-ui-react'

class AboutUs extends React.PureComponent {

    render() {
        return (
            <div className="About-Us" >
                <text className="Intro-font" >Sobre a líbero:</text>
                <div className="Component" >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Segment className="Cards" color="green" raised>
                                <Label color='green' ribbon>
                                    MISSÃO
                                </Label>
                                <p className="Text-Component" >
                                    OFERECER UMA ASSESSORIA DE QUALIDADE COM AS MELHORES SOLUÇOES EM SEGUROS DE
                                    ACORDO COM PERFIL DE CADA CLIENTE, COM OBJETIVO DE GARANTIR A TRANQUILIDADE E
                                    CONFIANÇA.
                                </p>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className="Cards" color="green" raised>
                                <Label color='green' ribbon>
                                    VISÃO
                                </Label>
                                <p className="Text-Component" >
                                    SER REFERENCIA NA CORRETAGEM DE SEGUROS, CONSOLIDANDO-SE NA LIDERANÇA
                                    REGIONAL, MANTENDO A QUALIDADE E PROXIMIDADE COM NOSSOS CLIENTES.
                                </p>

                            </Segment>
                        </Grid.Column>
                        <div className="Values" >
                            <Segment color="green" className="Segment Cards" raised>
                                <Label color='green' ribbon>
                                    VALORES
                                </Label>
                                <p className="Text-Component" >
                                    ÉTICA, CONFIANÇA, CREDIBILIDADE E TRANSPARENCIA.
                                </p>
                            </Segment>
                        </div>

                    </Grid>
                    <div className="Feature-Component" >
                        <div className="Feature-Text" >
                            <div className="Title-Component" >
                                <p className="Title-Feature" >QUEM SOMOS</p>
                            </div>
                            <div className="Text-Component" >
                                <p>
                                    SOMOS UMA CORRETORA DE SEGUROS COMPROMETIDA COM A QUALIDADE E AGILIDADE
                                    NOS PROCESSOS, ALEM DE SE CONSOLIDAR A CADA ANO PELO ATENDIMENTO CONSULTIVO
                                    ATRELADO A UM PREÇO JUSTO.
                                    A LÍBERO SEGUROS OBJETIVA PRESTAR UMA ASSESSORIA PERSONALIZADA DE ACORDO COM
                                    AS NECESSIDADES DAQUELES QUE BUSCAM CUSTO-BENEFÍCIO E QUALIDADE.
                                    A EMPRESA FOI FUNDADA PELO SÓCIO-PROPRIETÁRIO TIAGO SOUTO, QUE ATUA HÁ 15 ANOS
                                    NO MERCADO FINANCEIRO, DESTACANDO-SE EM GRANDES INSTITUIÇÕES COMO BANCO
                                    BRADESCO, SANTANDER E HSBC. É GRADUADO EM ADMINISTRAÇÃO DE EMRPESAS(FCETM) E
                                    PÓS GRADUADO COM MBA EM GESTÃO DE PESSOAS(FGV). POSSUI AS CERTIFICAÇÕES CPA10 E
                                    CPA20(ANBIMA), ALEM DA HABILITAÇÃO COMO CORRETOR DE SEGUROS PLENO DE TODOS OS
                                    RAMOS(SUSEP).
                                    NESSES ANOS DE MERCADO, A ASCENSÃO E O SUCESSO DA EMPRESA SE DA PELA EFICIÊNCIA
                                    DE UMA EQUIPE CAPACITADA, QUE ATUA DE FORMA SEGMENTADA, ALÉM DO TRABALHO
                                    INCANSÁVEL DE SEU FUNDADOR, OFERECENDO, COM CONFIANÇA, AS MELHORES SOLUÇÕES
                                    EM SEGUROS.
                            </p>
                            </div>
                        </div>
                        <div className="Feature-Image" >
                            <img src={require("../images/porta-libero.png")} className="ImgFeature" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutUs;