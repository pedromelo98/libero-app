import React from 'react';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

function InsInfoForm(props) {

    return (
        <>
            <div className={props.cls.formTitle}>
                <h1>Seguro</h1>
            </div>

            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Tipo de Seguro</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={"Novo"}>Novo</option>
                    <option value={"Renovação"}>Renovação</option>


                </Select>
            </FormControl>


            <TextField
                label="Vigência Inicial"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <TextField
                label="Vigência Final"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="bank-select">Banco de maior Relacionamento</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'bank',
                        id: 'bank-select'
                    }}


                >
                    <option value="" />
                    <option value={"Banco do Brasil"}>Banco do Brasil</option>
                    <option value={"Santander"}>Santander</option>
                    <option value={"Caixa Econômica Federal"}>Caixa Econômica Federal</option>
                    <option value={"Bradesco"}>Bradesco</option>
                    <option value={"Itaú"}>Itaú</option>
                    <option value={"HSBC"}>HSBC</option>
                    <option value={"SICREDI"}>SICREDI</option>
                    <option value={"Sicoob"}>Sicoob</option>


                </Select>
            </FormControl>

            <TextField
                label="Observações"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <div className={props.cls.btnContainer} >

                <Button className={props.cls.button} onClick={props.onBack} color={"secondary"} variant="contained">Voltar</Button>
                <Button className={props.cls.button} onClick={props.onNext} color={"primary"}   variant="contained">Próximo</Button>
            </div>


        </>
    );
}

export default InsInfoForm;