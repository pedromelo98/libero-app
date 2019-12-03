import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/CarInsurance.css';
import '../../screens/Screens.css';
import InsuredForm from '../GeneralInsurance/InsuredForm.js';
import ContactForm from '../GeneralInsurance/ContactForm.js';
import VehicleForm from './VehicleForm.js';
import InsInfoForm from '../GeneralInsurance/InsInfoForm.js';
import QuizForm from '../GeneralInsurance/QuizForm.js';
import MainDriverForm from './MainDriverForm.js';
import CoverageForm from '../GeneralInsurance/CoverageForm.js';
import RenderIntro from '../Insurance-Intro';

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
    }

}));


function CarInsurance() {
    // const [animationFinished, setAnimationFinished] = useState(false);
    const [renderForm, setRenderForm] = useState(false);
    const [fnum, setFnum] = useState(0);
    const form = useRef(null);
    const classes = useStyles();

    function handleForm() {
        setRenderForm(!renderForm);
    }

    function realNext() {
        if (fnum < 6) setFnum(fnum + 1);
        else setFnum(6);
    }

    function realBack() {
        if (fnum > 0) setFnum(fnum - 1);
        else setFnum(0);
    }

    const handleNext = event => {
        event.preventDefault();
        let op = 1;
        const interval = setInterval(() => {
            op = op - 0.1;
            form.current.style.opacity = op;
            if (op <= 0) {
                clearInterval(interval);
                realNext();
                const bint = setInterval(() => {
                    op = op + 0.1;
                    form.current.style.opacity = op;
                    if (op >= 1) {
                        clearInterval(bint);
                    }
                }, 10);

            }
        }, 10);
    }


    const handleBack = event => {
        event.preventDefault();
        let op = 1;
        const interval = setInterval(() => {
            op = op - 0.1;
            form.current.style.opacity = op;
            if (op <= 0) {
                clearInterval(interval);
                realBack();

                const bint = setInterval(() => {
                    op = op + 0.1;
                    form.current.style.opacity = op;
                    if (op >= 1) {
                        clearInterval(bint);
                    }
                }, 10);

            }
        }, 10);
    }

    return (
        <div  >
            {renderForm ?
                <Container className="Top-Space" component="main" maxWidth="sm">

                    <Form className={classes.form} ref={form}>
                        {fnum <= 0 ? <InsuredForm cls={classes} onBack={handleForm} onNext={handleNext} /> : null}
                        {fnum === 1 ? <ContactForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                        {fnum === 2 ? <VehicleForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                        {fnum === 3 ? <InsInfoForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                        {fnum === 4 ? <QuizForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                        {fnum === 5 ? <MainDriverForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                        {fnum >= 6 ? <CoverageForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                    </Form>

                </Container >
                :
                <RenderIntro handleForm={handleForm} img={require('../../images/carro.jpg')} title="Seguro Auto Individual" />
            }

        </div>
    )

}


export default CarInsurance;