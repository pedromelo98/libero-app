import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


export default function HomeSlider() {

    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className=""
                        src="https://www.proteste.org.br/-/media/proteste/images/home/seguros/seguro-vida-cobertura.jpg?rev=58118673-a4cc-4d43-97de-b154d9f76baf"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src="https://jurosbaixos.com.br/conteudo/wp-content/uploads/sites/2/2018/02/media-20180205.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src="https://www.pattini.com.br/wp-content/uploads/2015/12/o-que-o-seguro-residencial-pode-e-deve-cobrir-1078x539.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}