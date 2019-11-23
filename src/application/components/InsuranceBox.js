import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../screens/Screens.css';

export default function InsuranceBox(props) {

    return (
        <Container >
            <p className="Intro-font" >Nossos serviços</p>
            <Card>
                <Card.Header as='h2' >Faça sua cotação online:</Card.Header>
                <Card.Body>
                    <Row className="text-center">

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='car' security='CARRO' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='motorcycle' security='MOTO' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='truck' security='CAMINHÃO' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='bicycle' security='BIKE' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='home' security='RESIDENCIAL' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='warehouse' security='EMPRESA' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='building' security='CONDOMÍNIO' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='plane' security='VIAGEM' />
                        </Col>

                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='heart' security='VIDA INDIVIDUAL' />
                        </Col>
                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='users' security='VIDA GLOBAL' />
                        </Col>
                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='doctor' security='ODONTOLÓGICO' path="#" />
                        </Col>
                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='plus circle' security='DIVERSOS' path="#" />
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
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
