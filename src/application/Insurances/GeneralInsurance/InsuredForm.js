import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';


function InsuredForm(props) {

    return (
        <>
            <div className={props.cls.formTitle}>
                <h1>Segurado</h1>
            </div>

            <TextField className={props.cls.input} id="standard-basic" label="Nome completo" fullWidth variant="outlined" />

            <TextField className={props.cls.input} id="cpf" label="CPF/CNPJ" fullWidth variant="outlined" />

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
            <hr />
            <div className={props.cls.btnContainer} >

                <Button className={props.cls.button} onClick={props.onBack} variant="contained">Voltar</Button>
                <Button className={props.cls.button} onClick={props.onNext} color={"primary"} variant="contained">Próximo</Button>
            </div>
        </>
    );
}

export default InsuredForm;