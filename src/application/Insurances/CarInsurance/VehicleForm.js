import React from 'react';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import '../../styles/CarInsurance.css';
import '../../screens/Screens.css';


function ContactForm(props) {

    return (
        <>
            <div className={props.cls.formTitle}>

                <h1>Veículo</h1>
            </div>
            <TextField
                label="Placa"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <TextField
                label="Ano Modelo"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="zero-select">Carro Zero</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'zero',
                        id: 'zero-select'
                    }}
                >
                    <option value="" />
                    <option value={0}>Não</option>
                    <option value={1}>Sim</option>

                </Select>
            </FormControl>
            <TextField
                label="Modelo"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <TextField
                label="Código FIPE"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />
            <TextField
                label="MARCA"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />
            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="fuel-select">Combustivel</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'fuel',
                        id: 'fuel-select'
                    }}


                >
                    <option value="" />
                    <option value={"Flex"}>Flex</option>
                    <option value={"Gasolina"}>Gasolina</option>
                    <option value={"Álcool"}>Álcool</option>
                    <option value={"Diesel"}>Diesel</option>
                    <option value={"Híbrido"}>Híbrido</option>
                    <option value={"Tetrafuel"}>Tetrafuel</option>

                </Select>
            </FormControl>

            <FormControl className={props.cls.formControl} fullWidth>
                <InputLabel htmlFor="gas-select">Possui Kit Gás</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'gas',
                        id: 'gas-select'
                    }}


                >
                    <option value="" />
                    <option value={"Não"}>Não</option>
                    <option value={"Sim"}>Sim</option>


                </Select>
            </FormControl>

            <FormControl className={props.cls.formControl} fullWidth>
                <InputLabel htmlFor="financ-select">Alienado/Financiado</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'financ',
                        id: 'financ-select'
                    }}


                >
                    <option value="" />
                    <option value={"Não"}>Não</option>
                    <option value={"Sim"}>Sim</option>


                </Select>
            </FormControl>
            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="aintifurto-select">Antifurto</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'aintifurto',
                        id: 'aintifurto-select'
                    }}


                >
                    <option value="" />
                    <option value={"Não Possui"}>Não Possui</option>
                    <option value={"Alarme"}>Alarme</option>
                    <option value={"Bloqueador de Ignição"}>Bloqueador de Ignição</option>
                    <option value={"Trava Carneiro"}>Trava Carneiro</option>
                    <option value={"Trava Mul-T-Lock"}>Trava Mul-T-Lock</option>
                    <option value={"Outros"}>Outros</option>

                </Select>
            </FormControl>


            <TextField
                label="CEP do Pernoite"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />
            <TextField
                label="Chassi"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />


            <div className={props.cls.btnContainer} >

                <Button className={props.cls.button} color={"secondary"} variant="contained">Voltar</Button>
                <Button className={props.cls.button} color={"primary"} variant="contained">Próximo</Button>
            </div>
        </>
    );
}

export default ContactForm;