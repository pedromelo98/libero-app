import React, { useRef, useState, useEffect } from 'react';
import { Select, FormHelperText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CoverageForm(props) {

    const [lw, setLw] = useState(0);
    const [show, setShow] = useState(false);
    const fc = useRef(null);

    //fc.current.offsetWidth/2);
    useEffect(() =>
        setLw("Carro Reserva".length * 7)
        , []);

    return (
        <>
            <div className={props.cls.formTitle}>
                <h1>Coberturas</h1>
            </div>
            <FormControl>


            <FormControlLabel
                control={
                    <Checkbox
                    checked={show}
                    onChange={() => setShow(!show)}
                    color="primary"
                    value={show}
                    inputProps={{ "aria-label": "primary checkbox" }}
                    />
                }
                label="Desejo Preencher as coberturas"
                />
        {!show && <FormHelperText>Nós escolheremos as melhores opções pra você.</FormHelperText>}
                </FormControl>
            {show &&
                <>
                    <FormControl fullWidth className={props.cls.formControl}  >
                        <InputLabel htmlFor="estado-civil">Tipo de Franquia</InputLabel>

                        <Select
                            native
                            inputProps={{
                                id: "estado-civil",
                                name: "estado-civil"
                            }}

                        >
                            <option value="" />
                            <option value={'Normal'}>Normal</option>
                            <option value={'Reduzida'}>Reduzida</option>

                        </Select>
                    </FormControl>
                    <TextField
                        label="Fator de Ajuste"
                        type="text"
                        className={props.cls.input}
                        fullWidth
                        variant="outlined" />

                    <p>servicos</p>

                    <FormControl fullWidth className={props.cls.formControl}  >
                        <InputLabel htmlFor="estado-civil">Assistência</InputLabel>

                        <Select
                            native
                            inputProps={{
                                id: "estado-civil",
                                name: "estado-civil"
                            }}

                        >
                            <option value="" />
                            <option value={'Não'}>Não</option>
                            <option value={'Completa'}>Completa</option>
                            <option value={'Intermediária'}>Intermediária</option>
                            <option value={'Básica'}>Básica</option>

                        </Select>
                    </FormControl>
                    <FormControl fullWidth className={props.cls.formControl}  >
                        <InputLabel htmlFor="estado-civil">Vidros</InputLabel>

                        <Select
                            native
                            inputProps={{
                                id: "estado-civil",
                                name: "estado-civil"
                            }}

                        >
                            <option value="" />
                            <option value={'Não'}>Não</option>
                            <option value={'Básico'}>Básico</option>
                            <option value={'Completo'}>Completo</option>

                        </Select>
                    </FormControl>
                    <FormControl ref={fc} variant={"outlined"} fullWidth className={props.cls.formControl}  >
                        <InputLabel htmlFor="estado-civil">Carro Reserva</InputLabel>

                        <Select
                            native
                            labelWidth={lw}
                            inputProps={{
                                id: "estado-civil",
                                name: "estado-civil"
                            }}

                        >
                            <option value="" />
                            <option value={'Não'}>Não</option>
                            <option value={'Completa'}>7 Dias</option>
                            <option value={'Intermediária'}>15 Dias</option>
                            <option value={'Básica'}>30 Dias</option>

                        </Select>
                    </FormControl>

                    <p>RCF</p>
                    <TextField
                        label="Danos Materiais"
                        type="text"
                        className={props.cls.input}
                        fullWidth
                        variant="outlined" />

                    <TextField
                        label="Danos Corporais"
                        type="text"
                        className={props.cls.input}
                        fullWidth
                        variant="outlined" />

                    <TextField
                        label="Danos Morais"
                        type="text"
                        className={props.cls.input}
                        fullWidth
                        variant="outlined" />

                    <p>APP</p>

                    <TextField
                        label="Danos Morais"
                        type="text"
                        className={props.cls.input}
                        fullWidth
                        variant="outlined" />
                </>
            }
            <div className={props.cls.btnContainer} >
                <Button className={props.cls.button} onClick={props.onBack} variant="contained">Voltar</Button>
                <Button className={props.cls.button} color={"primary"} variant="contained">Próximo</Button>
            </div>
        </>
    );
}

export default CoverageForm;