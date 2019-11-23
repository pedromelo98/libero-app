import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import '../screens/Screens.css'

export default function InsuranceBox() {
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
                            <DesktopIcon iconName='doctor' security='ODONTOLÓGICO' />
                        </Col>
                        <Col sm={3} xs={4}>
                            <DesktopIcon iconName='plus circle' security='DIVERSOS' />
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
    );
}



function DesktopIcon(props) {
    const { iconName, security } = props;

    return (
        <div className="DesktopIcon-Flemis">
            <div className="DesktopIcon text-center">
                <Icon name={iconName} size={`${props.size !== undefined ? props.size : 'big'}`} />
            </div>
            <p>{security}</p>

        </div>
    );
}
