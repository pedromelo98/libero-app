import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContactForm(props) {

    return (
        <>
            <div className={props.cls.formTitle}>
                <h1>Contato</h1>
            </div>
            <TextField
                label="E-mail"
                type="email"
                className={props.cls.input}
                fullWidth
                variant="outlined"
            />
            <TextField
                label="Telefone Celular"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined"
            />
            <TextField
                label="Telefone Fixo"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />
            <hr />
            <div className={props.cls.btnContainer}>

                <Button className={props.cls.button} onClick={props.onBack} variant="contained">Voltar</Button>
                <Button className={props.cls.button} onClick={props.onNext} color={"primary"} variant="contained">Próximo</Button>
            </div>
        </>
    );
}

export default ContactForm;