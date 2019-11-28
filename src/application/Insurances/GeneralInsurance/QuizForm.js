import React from 'react';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

function QuizForm(props) {

    return (
        <>
            <div className={props.cls.formTitle}>

                <h1>Questionário</h1>
            </div>
            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Tipo de Residência</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={"Casa"}>Casa</option>
                    <option value={"Apartamento"}>Apartamento</option>
                    <option value={"Condomínio de Casas"}>Condomínio de Casas</option>
                    <option value={"Outros"}>Outros</option>


                </Select>
            </FormControl>

            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Qtd Veículos na Residência</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Um</option>
                    <option value={2}>Dois</option>
                    <option value={3}>Três</option>
                    <option value={4}>Quatro</option>
                    <option value={5}>Cinco</option>


                </Select>
            </FormControl>

            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Garagem na Residência</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Com Portão Eletrônico</option>
                    <option value={2}>Com Portão Manual</option>
                    <option value={3}>Não Possui Garagem</option>

                </Select>
            </FormControl>

            <FormControl className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Garagem no Trabalho</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Não utiliza para este fim</option>
                    <option value={2}>Não</option>
                    <option value={3}>Sim</option>
                    <option value={4}>Não trabalha</option>

                </Select>
            </FormControl>
            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Garagem no Local de Estudo</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Não utiliza para este fim</option>
                    <option value={2}>Não</option>
                    <option value={3}>Sim</option>
                    <option value={4}>Não estuda</option>

                </Select>
            </FormControl>


            <TextField
                label="Profissão"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Distância até o Trabalho</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Não utiliza para este fim</option>
                    <option value={2}>Não</option>
                    <option value={3}>Sim</option>
                    <option value={4}>Não trabalha</option>

                </Select>
            </FormControl>


            <FormControl fullWidth className={props.cls.formControl}>
                <InputLabel htmlFor="instype-select">Tipo de Uso</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'instype',
                        id: 'instype-select'
                    }}


                >
                    <option value="" />
                    <option value={1}>Particular</option>
                    <option value={2}>Profissional</option>
                    <option value={3}>Taxi</option>
                    <option value={4}>Motorista de App</option>

                </Select>
            </FormControl>

            <TextField
                label="Quilometragem Mensal"
                type="text"
                className={props.cls.input}
                fullWidth
                variant="outlined" />

            <div className={props.cls.btnContainer} >

                <Button className={props.cls.button} onClick={props.onBack} color={"secondary"} variant="contained">Voltar</Button>
                <Button className={props.cls.button} onClick={props.onNext} color={"primary"} variant="contained">Próximo</Button>
            </div>
        </>
    );
}

export default QuizForm;