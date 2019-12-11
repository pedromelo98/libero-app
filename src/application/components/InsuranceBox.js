import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../screens/Screens.css';
import '../styles/Insurances.css';
import * as LINKS from '../constants/Links';

export default class InsuranceBox extends React.Component {

    constructor(props) {
        super(props)
    }

    /*state = {
        insurances: [
            { name: "AUTO", link: LINKS.LINK_AUTO, imagePath: "../images/carro.jpg", componentLink: true, alt: "Seguro Automobilistico" },
            { name: "RESIDENCIAL", link: LINKS.LINK_RESIDENCIAL, imagePath: "../images/house.jpg", componentLink: true, alt: "Seguro Residencial" },
            { name: "VIDA", link: LINKS.LINK_VIDA_INDIVIDUAL, imagePath: "../images/life.jpg", componentLink: true, alt: "Seguro de Vida" },
            { name: "RISCOS AGRÍCOLAS", link: LINKS.LINK_AGRICOLAS, imagePath: "../images/trator.jpg", componentLink: true, alt: "Seguro para riscos agrícolas" },
            { name: "EMPRESARIAL", link: LINKS.LINK_EMPRESARIAL, imagePath: "../images/empresa.jpg", componentLink: true, alt: "Seguro empresarial" },
            { name: "PORTÁTEIS", link: LINKS.LINK_PORTATEIS, imagePath: "../images/portateis.jpg", componentLink: false, alt: "Seguro de Portáteis" },
            { name: "CARGAS", link: LINKS.LINK_CARGAS, imagePath: "../images/truck.jpg", componentLink: true, alt: "Seguro de cargas" },
            { name: "CONDOMÍNIO", link: LINKS.LINK_CONDOMINIO, imagePath: "../images/condominio.jpg", componentLink: true, alt: "Seguro de Condomínio" },
            { name: "ODONTOLÓGICO", link: LINKS.LINK_ODONTOLOGICO, imagePath: "../images/odontologico.jpg", componentLink: false, alt: "Seguro Odontológico" },
            { name: "BIKE", link: LINKS.LINK_BIKE, imagePath: "../images/bike.jpg", componentLink: false, alt: "Seguro de Bike" },
            { name: "VIAGEM", link: LINKS.LINK_VIAGEM, imagePath: "../images/viagem.jpg", componentLink: false, alt: "Seguro de Viagem" },
            { name: "FINANCIAMENTOS", link: LINKS.LINK_FINANCIAMENTOS, imagePath: "../images/calculadora.jpg", componentLink: true, alt: "Seguro de Financiamentos" },
        ]
    }*/

    renderInsuranceBall(name, link, imagePath, componentLink, alt) {
        if (componentLink) {
            return (
                <Link to={link} className="Insurance-item" >
                    <div className="Img-component" >
                        <img className="Insurance-img" src={imagePath} alt={alt} />
                    </div>
                    <p className="Insurance-text" >{name}</p>
                </Link>
            )
        }
        return (
            <a href={link} className="Insurance-item" >
                <div className="Img-component" >
                    <img className="Insurance-img" src={imagePath} alt={alt} />
                </div>
                <p className="Insurance-text" >{name}</p>
            </a>
        )
    }

    render() {
        return (
            <Container >
                <p className="Intro-font" >Nossos serviços</p>
                <Card>
                    <Card.Header as='h2' >Simule online ou solicite nossa proposta:</Card.Header>
                    <Card.Body>
                        <div className="Insurance-row" >
                            <div className="Insurance-column" >
                                {this.renderInsuranceBall("AUTO", LINKS.LINK_AUTO, require("../images/carro.jpg"), true, "Seguro Automobilistico")}
                                {this.renderInsuranceBall("RESIDENCIAL", LINKS.LINK_RESIDENCIAL, require("../images/house.jpg"), true, "Seguro Residencial")}
                                {this.renderInsuranceBall("VIDA", LINKS.LINK_VIDA_INDIVIDUAL, require("../images/life.jpg"), true, "Seguro de Vida")}
                            </div>

                            <div className="Insurance-column" >
                                {this.renderInsuranceBall("RISCOS AGRÍCOLAS", LINKS.LINK_AGRICOLAS, require("../images/trator.jpg"), true, "Seguro Riscos Agricolas")}
                                {this.renderInsuranceBall("EMPRESARIAL", LINKS.LINK_EMPRESARIAL, require("../images/empresa.jpg"), true, "Seguro Empresarial")}
                                {this.renderInsuranceBall("PORTÁTEIS", LINKS.LINK_PORTATEIS, require("../images/portateis.jpg"), false, "Seguro de Portateis")}
                            </div>

                            <div className="Insurance-column" >
                                {this.renderInsuranceBall("CARGAS", LINKS.LINK_CARGAS, require("../images/truck.jpg"), true, "Seguro de Cargas")}
                                {this.renderInsuranceBall("CONDOMÍNIO", LINKS.LINK_CONDOMINIO, require("../images/condominio.jpg"), true, "Seguro de Condomínio")}
                                {this.renderInsuranceBall("ODONTOLÓGICO", LINKS.LINK_ODONTOLOGICO, require("../images/odontologico.jpg"), false, "Seguro Odontológico")}
                            </div>

                            <div className="Insurance-column" >
                                {this.renderInsuranceBall("BIKE", LINKS.LINK_BIKE, require("../images/bike.jpg"), false, "Seguro de Bike")}
                                {this.renderInsuranceBall("VIAGEM", LINKS.LINK_VIAGEM, require("../images/viagem.jpg"), false, "Seguro de Viagem")}
                                {this.renderInsuranceBall("FINANCIAMENTOS", LINKS.LINK_FINANCIAMENTOS, require("../images/calculadora.jpg"), true, "Seguro de Financiamentos")}
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </Container >
        );
    }
}