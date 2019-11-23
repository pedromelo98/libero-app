import React from 'react';
import { Carousel } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'

import '../styles/Carousel.css'

export default function HomeSlider() {

    return (
        <Carousel>
            {/*<Carousel.Item>
                <img
                    carousel={isMobile ? "mobile" : "browser"}
                    src={require('../images/carro.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>*/}
            
            <Carousel.Item>
                <img
                    carousel={isMobile ? "mobile" : "browser"}
                    className="Img-Carousel"
                    src={require('../images/shakinghands.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}