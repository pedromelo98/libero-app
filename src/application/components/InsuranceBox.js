import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../screens/Screens.css';
import '../styles/Insurances.css';
import * as LINKS from '../constants/Links';

export default function InsuranceBox(props) {

    return (
        <Container >
            <p className="Intro-font" >Nossos serviços</p>
            <Card>
                <Card.Header as='h2' >Simule online ou solicite nossa proposta:</Card.Header>
                <Card.Body>
                    <div className="Insurance-row" >
                        <div className="Insurance-column" >
                            <Link to={LINKS.LINK_AUTO} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/carro.jpg")} alt="Seguro Automobilistico" />
                                </div>
                                <p className="Insurance-text" >AUTO</p>
                            </Link>
                            <a href={LINKS.LINK_RESIDENCIAL} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/house.jpg")} alt="Seguro Residencial" />
                                </div>
                                <p className="Insurance-text" >RESIDENCIAL</p>
                            </a>
                            <a href={LINKS.LINK_VIDA_INDIVIDUAL} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/life.jpg")} alt="Seguro de Vida" />
                                </div>
                                <p className="Insurance-text" >VIDA</p>
                            </a>
                        </div>

                        <div className="Insurance-column" >
                            <Link to={LINKS.LINK_AGRICOLAS} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/trator.jpg")} alt="Seguro Automobilistico" />
                                </div>
                                <p className="Insurance-text" >RISCOS AGRÍCOLAS</p>
                            </Link>
                            <Link to={LINKS.LINK_EMPRESARIAL} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/empresa.jpg")} alt="Seguro Empresarial" />
                                </div>
                                <p className="Insurance-text" >EMPRESARIAL</p>
                            </Link>
                            <a href={LINKS.LINK_PORTATEIS} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/portateis.jpg")} alt="Seguro de Portateis" />
                                </div>
                                <p className="Insurance-text" >PORTÁTEIS</p>
                            </a>

                        </div>

                        <div className="Insurance-column" >
                            <Link to={LINKS.LINK_CARGAS} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/truck.jpg")} alt="Seguro de Cargas" />
                                </div>
                                <p className="Insurance-text" >CARGAS</p>
                            </Link>
                            <Link to={LINKS.LINK_CONDOMINIO} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/condominio.jpg")} alt="Seguro de Condomínio" />
                                </div>
                                <p className="Insurance-text" >CONDOMÍNIO</p>
                            </Link>
                            <a href={LINKS.LINK_ODONTOLOGICO} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/odontologico.jpg")} alt="Seguro Odontológico" />
                                </div>
                                <p className="Insurance-text" >ODONTOLÓGICO</p>
                            </a>
                        </div>

                        <div className="Insurance-column" >
                            <a href={LINKS.LINK_BIKE} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/bike.jpg")} alt="Seguro Automobilistico" />
                                </div>
                                <p className="Insurance-text" >BIKE</p>
                            </a>
                            <a href={LINKS.LINK_VIAGEM} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/viagem.jpg")} alt="Seguro de Viagem" />
                                </div>
                                <p className="Insurance-text" >VIAGEM</p>
                            </a>
                            <Link to={LINKS.LINK_FINANCIAMENTOS} className="Insurance-item" >
                                <div className="Img-component" >
                                    <img className="Insurance-img" src={require("../images/calculadora.jpg")} alt="Financiamentos" />
                                </div>
                                <p className="Insurance-text" >FINANCIAMENTOS</p>
                            </Link>
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