import React from 'react';
import '../styles/Social.css';
import './Screens.css';
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { LINK_LIGACAO } from '../constants/Links'

const useStyles = makeStyles(theme => ({
    btn: {
        marginTop: 20
    }
}));


function Contact() {
    const classes = useStyles();


    return (
        <div className="Social" >
            <p className="Intro-font" >Entre em contato conosco:</p>
            <div className="Socials" >
                <div className="Social-item" >
                    <Icon name='phone' size='huge' />
                    <p className="Social-font" >(34) 3322-6000</p>
                </div>

                <Button href={LINK_LIGACAO} className={classes.btn} color="primary" variant="contained">
                    Solicite uma Ligação!
                </Button>
            </div>
        </div>
    );

}

export default Contact;