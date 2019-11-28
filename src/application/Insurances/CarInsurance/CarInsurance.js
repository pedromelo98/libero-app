import React, { useState } from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
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
import CoverageForm from '../GeneralInsurance/CoverageForm';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    const [animationFinished, setAnimationFinished] = useState(false);
    const [fnum, setFnum] = useState(0);
    const classes = useStyles();

    function handleNext() {
        if(fnum < 6) setFnum(fnum + 1);
        else setFnum(6);
    }

    function handleBack() {
        if (fnum > 0) setFnum(fnum - 1);
        else setFnum(0);
    }


    /* const renderIntro = () => {

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

     return renderIntro();*/

    return (
        <Container component="main" maxWidth="sm">

            <Form className={classes.form}>
                {fnum <= 0 ? <InsuredForm     cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                {fnum === 1 ? <ContactForm    cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                {fnum === 2 ? <VehicleForm    cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                {fnum === 3 ? <InsInfoForm    cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                {fnum === 4 ? <QuizForm       cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                {fnum === 5 ? <MainDriverForm cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
                {fnum >= 6 ? <CoverageForm    cls={classes} onBack={handleBack} onNext={handleNext} /> : null}
            </Form>
        </Container >
    )
}


export default CarInsurance;