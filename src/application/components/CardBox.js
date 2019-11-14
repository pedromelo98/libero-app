import React from 'react';
import '../screens/Screens.css';
import 'semantic-ui-css/semantic.min.css';
import { Row, Col } from 'react-bootstrap';
import InsCard from './InsCard';


function CardBox() {
    // https://blog.benner.com.br/hubfs/internet-das-coisas.jpg
    return (
        <div>
            <Row noGutters={true}>
                <Col>
                    <InsCard
                        bg={"https://www.proteste.org.br/-/media/proteste/images/home/seguros/seguro-vida-cobertura.jpg?rev=58118673-a4cc-4d43-97de-b154d9f76baf"}
                        insurance={"Seguro de vida"}
                        text={"Venha conhecer nosso seguro de vida"} />
                </Col>
                <Col>
                    <InsCard
                        bg={"https://jurosbaixos.com.br/conteudo/wp-content/uploads/sites/2/2018/02/media-20180205.png"}
                        insurance={"Seguro veicular"}
                        text={"Venha conhecer nosso seguro veicular"} />
                </Col>
                <Col>

                    <InsCard
                        bg={"https://www.pattini.com.br/wp-content/uploads/2015/12/o-que-o-seguro-residencial-pode-e-deve-cobrir-1078x539.jpg"}
                        insurance={"Seguro Residencial"}
                        text={"Venha conhecer nosso seguro residencial"} />
                </Col>
            </Row>


        </div>

    );

}

export default CardBox;
