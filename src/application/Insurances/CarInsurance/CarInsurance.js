import React, { useState, useRef, useEffect } from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';
import { Container, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import '../../styles/CarInsurance.css';
import '../../screens/Screens.css';
import InsuredForm from '../GeneralInsurance/InsuredForm.js';
import ContactForm from '../GeneralInsurance/ContactForm.js';
import VehicleForm from './VehicleForm.js';
import InsInfoForm from '../GeneralInsurance/InsInfoForm.js';
import QuizForm from '../GeneralInsurance/QuizForm.js';
import MainDriverForm from './MainDriverForm.js';
import CoverageForm from '../GeneralInsurance/CoverageForm';

const useStyles = makeStyles(theme => ({
    button: {
        margin: 15,
    },
    input: {
        margin: theme.spacing(1),
    },
    form: {
        padding: 13,
        textAlign: 'center',
        flex: 1,
        justifyContent: "space-around"
    },
    myimg: {
        width: "100%",
        height: "auto",
    },
    formTitle: {
        textAlign: 'left',
        margin: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    btnContainer: {
        padding: theme.spacing(1)
    },
    timeout: {
        transition: '.3s'
    },
    test: {
        backgroundColor: "#FFF"
    }

}));


function CarInsurance() {
    const [animationFinished, setAnimationFinished] = useState(false);
    const classes = useStyles();



    const renderIntro = () => {

        return (
            <div className="Intro-Component" >
                <p className="Intro-font" >Seguro Auto Individual</p>
                <div className="Intro-View" >
                    <div id='gate' className="Image-Component" >
                        <img className="Car-Image" src={require('../../images/carro.jpg')} />
                    </div>
                    {animationFinished &&
                        <div className={`Button-View ${classes.timeout}`} >
                            <p>Solicite nossa proposta:</p>
                            <SemanticButton.Group >
                                <SemanticButton className="Button" >PREENCHER ONLINE</SemanticButton>
                                <SemanticButton.Or text='OU' />
                                <SemanticButton color='green' >SOLICITAR LIGAÇÃO </SemanticButton>
                            </SemanticButton.Group>
                        </div>
                    }

                    <div className="Image-Component" >
                        <img image='inverted' className="Car-Image" src={require('../../images/carro.jpg')} />
                    </div>
                </div>
            </div>
        )

    }


    // return renderIntro();
    return (
        <Container component="main" maxWidth="sm">


            <Form className={classes.form}>
                <InsuredForm cls={classes} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ContactForm cls={classes}/>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <VehicleForm cls={classes}/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <InsInfoForm cls={classes}/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <QuizForm cls={classes}/>

                <br />
                <br />
                <br />
                <br />
                <MainDriverForm cls={classes}/>

                <br />
                <br />
                <br />
                <br />

                <CoverageForm cls={classes}/>

            </Form>
        </Container >
    )
}



export default CarInsurance;