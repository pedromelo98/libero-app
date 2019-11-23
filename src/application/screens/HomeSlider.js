import React from 'react';
import { Carousel } from 'react-bootstrap';

import '../styles/Carousel.css' 

export default function HomeSlider() {

    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="Img-Carousel"
                        src={require('../images/carro.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="Img-Carousel"
                        src="https://jurosbaixos.com.br/conteudo/wp-content/uploads/sites/2/2018/02/media-20180205.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="Img-Carousel"
                        src="https://www.pattini.com.br/wp-content/uploads/2015/12/o-que-o-seguro-residencial-pode-e-deve-cobrir-1078x539.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}