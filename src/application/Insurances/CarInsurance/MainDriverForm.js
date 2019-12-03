import React from 'react';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

function MainDriverForm(props) {

    return (
        <>
            <div className={props.cls.formTitle}>
                <h1>Condutor Principal</h1>
            </div>

            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Relação Segurado/Condutor</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Próprio</option>
                    <option value={2}>Cônjugue</option>
                    <option value={3}>Empregado(a)</option>
                    <option value={4}>Irmã(o)</option>
                    <option value={5}>Filho(a)</option>
                    <option value={6}>Mãe</option>
                    <option value={7}>Pai</option>
                    <option value={8}>Outros</option>

                </Select>
            </FormControl>

            <TextField className={props.cls.input} id="flemis-basic" label="Nome completo" fullWidth variant="outlined" />

            <TextField className={props.cls.input} id="cpf" label="CPF" fullWidth variant="outlined" />

            <TextField className={props.cls.input} id="cu-basic" label="Data de Nascimento" fullWidth variant="outlined" />

            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="gender-select">Gênero</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'gender',
                        id: 'gender-select'
                    }}


                >
                    <option value="" />
                    <option value={'Masculino'}>Masculino</option>
                    <option value={'Feminino'}>Feminino</option>

                </Select>
            </FormControl>

            <FormControl className={props.cls.formControl}  >
                <InputLabel htmlFor="estado-civil">Estado Civil</InputLabel>

                <Select
                    native
                    inputProps={{
                        id: "estado-civil",
                        name: "estado-civil"
                    }}

                >
                    <option value="" />
                    <option value={'Solteiro(a)'}>Solteiro(a)</option>
                    <option value={'Casado(a)'}>Casado(a)</option>
                    <option value={'Viúvo(a)'}>Viúvo(a)</option>
                    <option value={'Divorciado(a)'}>Divorciado(a)</option>
                </Select>
            </FormControl>

            <TextField className={props.cls.input} id="cucu-basic" label="Habilitado  Desde" fullWidth variant="outlined" />

            <TextField className={props.cls.input} id="hab-basic" label="Número da Habilitação" fullWidth variant="outlined" />

            <div className={props.cls.btnContainer} >

                <Button className={props.cls.button} onClick={props.onBack} variant="contained">Voltar</Button>
                <Button className={props.cls.button} onClick={props.onNext} color={"primary"} variant="contained">Próximo</Button>
            </div>

        </>
    );
}

export default MainDriverForm;