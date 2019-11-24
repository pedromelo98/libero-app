import React from 'react';
import '../styles/Social.css';
import './Screens.css';
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    btn: {
        marginTop: 20
    }
}));


function Contact () {
    const classes = useStyles();


        return (
            <div className="Social" >
                <p className="Intro-font" >Entre em contato conosco:</p>
                <div className="Socials" >
                    <div className="Social-item" >
                        <Icon name='phone' size='huge' />
                        <p className="Social-font" >(34) 3322-6000</p>
                    </div>

                    <Button className={classes.btn} color="primary" variant="contained">
                        Solicite Uma Ligação!
                    </Button>
                    {/* <a className="Social-item" >
                        <Icon name='facebook' size='huge' />
                        <p className="Social-font" >liberoseguros</p>
                    </a>
                    <a className="Social-item" >
                        <Icon name='instagram' size='huge' />
                        <p className="Social-font" >@liberoseguros</p>
                    </a> */}
                </div>
            </div>
        );
    
}

export default Contact;
