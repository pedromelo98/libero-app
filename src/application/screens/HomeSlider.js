import React from 'react';
import { Carousel } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'

import '../styles/Carousel.css'

export default function HomeSlider() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    carousel={isMobile ? "mobile" : "browser"}
                    className="Img-Carousel"
                    src={require('../images/shakinghands.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    Faça seu seguro com a Líbero
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    carousel={isMobile ? "mobile" : "browser"}
                    src={require('../images/online.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    Faça sua cotação online.
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}