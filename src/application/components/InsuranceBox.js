import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../screens/Screens.css';
import '../styles/Insurances.css';

export default function InsuranceBox(props) {

    return (
        <Container >
            <p className="Intro-font" >Nossos serviços</p>
            <Card>
                <Card.Header as='h2' >Faça sua cotação online:</Card.Header>
                <Card.Body>
                    <div className="Insurance-row" >
                        <div className="Insurance-column" >
                            <a className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/carro.jpg")} />
                                </div>
                                <p className="Insurance-text" >CARRO</p>
                            </a>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/house.jpg")} />
                                </div>
                                <p className="Insurance-text" >RESIDENCIAL</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/life.jpg")} />
                                </div>
                                <p className="Insurance-text" >SAÚDE</p>
                            </div>
                            
                        </div>

                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/moto.jpg")} />
                                </div>
                                <p className="Insurance-text" >MOTO</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/empresa.jpg")} />
                                </div>
                                <p className="Insurance-text" >EMPRESA</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/portateis.jpg")} />
                                </div>
                                <p className="Insurance-text" >PORTÁTEIS</p>
                            </div>
                            
                        </div>

                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/truck.jpg")} />
                                </div>
                                <p className="Insurance-text" >CAMINHÃO</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/condominio.jpg")} />
                                </div>
                                <p className="Insurance-text" >CONDOMÍNIO</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/odontologico.jpg")} />
                                </div>
                                <p className="Insurance-text" >ODONTOLÓGICO</p>
                            </div>
                        </div>

                        <div className="Insurance-column" >
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/bike.jpg")} />
                                </div>
                                <p className="Insurance-text" >BIKE</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/viagem.jpg")} />
                                </div>
                                <p className="Insurance-text" >VIAGEM</p>
                            </div>
                            <div className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/diversos.jpg")} />
                                </div>
                                <p className="Insurance-text" >DIVERSOS</p>
                            </div>
                        </div>

                        {/*<DesktopIcon iconName='motorcycle' security='MOTO' />

                        <DesktopIcon iconName='truck' security='CAMINHÃO' />

                        <DesktopIcon iconName='bicycle' security='BIKE' />

                        <DesktopIcon iconName='home' security='RESIDENCIAL' />

                        <DesktopIcon iconName='warehouse' security='EMPRESA' />

                        <DesktopIcon iconName='building' security='CONDOMÍNIO' />

                        <DesktopIcon iconName='plane' security='VIAGEM' />

                        <DesktopIcon iconName='heart' security='VIDA INDIVIDUAL' />
                        <DesktopIcon iconName='users' security='VIDA GLOBAL' />
                        <DesktopIcon iconName='doctor' security='ODONTOLÓGICO' path="#" />
                        <DesktopIcon iconName='plus circle' security='DIVERSOS' path="#" />*/}
                    </div>

                </Card.Body>
            </Card>
        </Container >
    );
}



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
