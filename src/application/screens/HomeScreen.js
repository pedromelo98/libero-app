import React from 'react';
import './Screens.css';
import 'semantic-ui-css/semantic.min.css';
import { Row, Col } from 'react-bootstrap';
//import 'bootstrap';
import LiberoSecurityCard from '../components/LiberoSecurityCard';
import InsCard from '../components/InsCard';


function HomeScreen() {

    return (
        <div>
            <Row noGutters={true}>
                <Col>
                    <InsCard
                        bg={"https://blog.benner.com.br/hubfs/internet-das-coisas.jpg"}
                        insurance={"Seguro de vida"}
                        text={"Venha conhecer nosso seguro de vida"} />
                </Col>
                <Col>
                    <InsCard
                        bg={"https://jurosbaixos.com.br/conteudo/wp-content/uploads/sites/2/2018/02/media-20180205.png"}
                        insurance={"Seguro de Carro"}
                        text={"Venha conhecer nosso seguro de carros"} />
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

export default HomeScreen;
