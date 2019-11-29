import React from 'react';
import { Card, /*Button, Row, Col,*/ Container } from 'react-bootstrap';
// import { Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import '../screens/Screens.css';
import '../styles/Insurances.css';

export default function InsuranceBox(props) {

    return (
        <Container >
            <p className="Intro-font" >Nossos serviços</p>
            <Card>
                <Card.Header as='h2' >Solicite nossa proposta ou faça uma Simulação online:</Card.Header>
                <Card.Body>
                    <div className="Insurance-row" >
                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/carro.jpg")} alt="Seguro Automobilistico" />
                                </div>
                                <p className="Insurance-text" >AUTO</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/house.jpg")} alt="Seguro Residencial" />
                                </div>
                                <p className="Insurance-text" >RESIDENCIAL</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/life.jpg")} alt="Seguro de Vida" />
                                </div>
                                <p className="Insurance-text" >SAÚDE</p>
                            </div>

                        </div>

                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/moto.jpg")} alt="Seguro Automobilistico" />
                                </div>
                                <p className="Insurance-text" >MOTO</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/empresa.jpg")} alt="Seguro Empresarial" />
                                </div>
                                <p className="Insurance-text" >EMPRESARIAL</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/portateis.jpg")} alt="Seguro de Portateis" />
                                </div>
                                <p className="Insurance-text" >PORTÁTEIS</p>
                            </div>

                        </div>

                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/truck.jpg")} alt="Seguro de Cargas" />
                                </div>
                                <p className="Insurance-text" >CARGAS</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/condominio.jpg")} alt="Seguro de Condomínio" />
                                </div>
                                <p className="Insurance-text" >CONDOMÍNIO</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/odontologico.jpg")} alt="Seguro Odontológico" />
                                </div>
                                <p className="Insurance-text" >ODONTOLÓGICO</p>
                            </div>
                        </div>

                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/bike.jpg")} alt="Seguro Automobilistico" />
                                </div>
                                <p className="Insurance-text" >BIKE</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/viagem.jpg")} alt="Seguro de Viagem" />
                                </div>
                                <p className="Insurance-text" >VIAGEM</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/calculadora.jpg")} alt="Financiamentos" />
                                </div>
                                <p className="Insurance-text" >FINANCIAMENTOS</p>
                            </div>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </Container >
    );
}


/*
function DesktopIcon(props) {
    const tlink = React.useRef(null);
    const { iconName, security } = props;

    const handleRedirect = () => tlink.current.click();

    return (
        <div className="DesktopIcon-Flemis">
            <div onClick={handleRedirect} className="DesktopIcon">
                <Icon name={iconName} size={`${props.size !== undefined ? props.size : 'big'}`} />
            </div>
            <Link ref={tlink} to={props.path ? props.path : "/#?"}>{security}</Link>

        </div>
    );
}
 */