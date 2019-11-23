import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';


export default function InsuranceBox() {
    return (
        <Container >
            {/* <Card className={"text-center"}> */}
                <Card>
                <Card.Header as="h5">Conheça nossos seguros</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
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


                    </Row>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}



function DesktopIcon(props) {
    const { iconName, security } = props;

    return (
        <>
        <div className="DesktopIcon text-center"  >
            <Icon name={iconName} size={`${props.size !== undefined ? props.size : 'big'}`} />
            {/* <p>{security}</p> */}
        </div>
        </>
    );
}
