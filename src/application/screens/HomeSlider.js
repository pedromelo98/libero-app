import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


export default function HomeSlider() {

    return (
        <Container>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Slider-img"
                        src="https://www.proteste.org.br/-/media/proteste/images/home/seguros/seguro-vida-cobertura.jpg?rev=58118673-a4cc-4d43-97de-b154d9f76baf"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Slider-img"
                        src="https://jurosbaixos.com.br/conteudo/wp-content/uploads/sites/2/2018/02/media-20180205.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 Slider-img"
                        src="https://www.pattini.com.br/wp-content/uploads/2015/12/o-que-o-seguro-residencial-pode-e-deve-cobrir-1078x539.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}