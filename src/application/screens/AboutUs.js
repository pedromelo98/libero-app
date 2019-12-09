import React from 'react';
import './Screens.css';
import '../styles/About.css';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Label, Segment } from 'semantic-ui-react'

class AboutUs extends React.PureComponent {

    render() {
        return (
            <div className="About-Us" >
                <text className="Intro-font" >Sobre a Líbero:</text>
                <div className="Component" >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Segment className="Cards" color="green" raised>
                                <Label color='green' ribbon>
                                    MISSÃO
                                </Label>
                                <p className="Text-Component" >
                                    Oferecer uma assessoria de qualidade com as melhores soluções em seguros, de acordo com o perfil de cada cliente, com o objetivo de garantir a tranquilidade e confiança.
                                </p>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className="Cards" color="green" raised>
                                <Label color='green' ribbon>
                                    VISÃO
                                </Label>
                                <p className="Text-Component" >
                                    Ser referência na corretagem de seguros, consolidando-se na liderança regional, mantendo a qualidade e proximidade com nossos clientes.
                                </p>

                            </Segment>
                        </Grid.Column>
                        <div className="Values" >
                            <Segment color="green" className="Segment Cards" raised>
                                <Label color='green' ribbon>
                                    VALORES
                                </Label>
                                <p className="Text-Component" >
                                    Ética, confiança, credibilidade e transparência.
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
                                    Somos uma corretora de seguros comprometida com a qualidade e agilidade
                                    nos processos, alem de se consolidar a cada ano pelo atendimento consultivo
                                    atrelado a um preço justo.
                                    a Líbero seguros objetiva prestar uma assessoria personalizada de acordo com
                                    as necessidades daqueles que buscam custo-benefício e qualidade.
                                    a empresa foi fundada pelo sócio-proprietário Tiago Souto, que atua há 15 anos
                                    no mercado financeiro, destacando-se em grandes instituições como Banco
                                    Bradesco, Santander e HSBC. É graduado em administração de empresas(FCETM) e
                                    pós graduado com MBA em gestão de pessoas(FGV). Possui as certificações CPA10 e
                                    CPA20(ANBIMA), alem da habilitação como corretor de seguros pleno de todos os
                                    ramos(SUSEP).
                                    Nesses anos de mercado, a ascensão e o sucesso da empresa se da pela eficiência
                                    de uma equipe capacitada, que atua de forma segmentada, além do trabalho
                                    incansável de seu fundador, oferecendo, com confiança, as melhores soluções
                                    em seguros.
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