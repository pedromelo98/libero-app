import React from 'react';
import './Screens.css';
import '../styles/About.css';
import 'semantic-ui-css/semantic.min.css';

import { Icon } from 'semantic-ui-react';

class AboutUs extends React.PureComponent {

    render() {
        return (
            <div className="About-Us" >
                <text className="Intro-font" >Sobre a líbero:</text>
                <div className="Component" >
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