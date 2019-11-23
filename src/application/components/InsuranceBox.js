import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import LiberoSecurityCard from './LiberoSecurityCard.js';

export default function InsuranceBox() {


    return (
        <>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Row className="text-center">
                        <Col sm={3}>

                            <LiberoSecurityCard iconName='car' security='CARRO' />
                        </Col>
                        <Col>

                            <LiberoSecurityCard iconName='car' security='CARRO' />
                        </Col>
                        <Col>

                            <LiberoSecurityCard iconName='car' security='CARRO' />
                        </Col>
                        <Col>

                            <LiberoSecurityCard iconName='car' security='CARRO' />
                        </Col>
                        <Col>

                            <LiberoSecurityCard iconName='car' security='CARRO' />
                        </Col>


                    </Row>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}