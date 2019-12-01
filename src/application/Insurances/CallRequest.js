import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles, Container} from '@material-ui/core';

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
        padding: theme.spacing(1),
        textAlign: "center"
    },
    timeout: {
        transition: '.3s'
    }

}));

function CallRequest(props) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" >
            <div className={classes.formTitle}>
                <h1>Solicite nossa proposta</h1>
            </div>
            <TextField
                label="Nome"
                type="text"
                className={classes.input}
                fullWidth
                variant="outlined"
            />
            <TextField
                label="E-mail"
                type="email"
                className={classes.input}
                fullWidth
                variant="outlined"
            />
            <TextField
                label="Telefone"
                type="text"
                className={classes.input}
                fullWidth
                variant="outlined" />
            <hr />
            <div className={classes.btnContainer}>

                <Button className={classes.button}  color={"secondary"} variant="contained">Voltar</Button>
                <Button className={classes.button}  color={"primary"} variant="contained">Avançar</Button>
            </div>
        </Container>
    );
}

export default CallRequest;