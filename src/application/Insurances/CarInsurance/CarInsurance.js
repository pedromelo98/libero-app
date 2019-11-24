import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';
import { Container, Select } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


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
        padding: theme.spacing(1)
    }

}));


function CarInsurance(props) {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">


            <Form className={classes.form}>
                <div className={classes.formTitle}>

                    <h1>Segurado</h1>
                </div>

                <TextField className={classes.input} id="standard-basic" label="Nome completo" fullWidth variant="outlined" />

                <TextField className={classes.input} id="cpf" label="CPF/CNPJ" fullWidth variant="outlined" />

                <TextField className={classes.input} id="cu-basic" label="Data de Nascimento" fullWidth variant="outlined" />

                <FormControl className={classes.formControl}>
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

                <FormControl className={classes.formControl}  >
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
                <div className={classes.btnContainer} >

                    <Button className={classes.button} color={"secondary"} variant="contained">Voltar</Button>
                    <Button className={classes.button} color={"primary"} variant="contained">Próximo</Button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className={classes.formTitle}>

                    <h1>Contato</h1>
                </div>
                <TextField
                    label="E-mail"
                    type="email"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    label="Telefone Celular"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    label="Telefone Fixo"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />
                <hr />
                <div className={classes.btnContainer}>

                    <Button className={classes.button} variant="outlined">Voltar</Button>
                    <Button className={classes.button} color={"primary"} variant="contained">Próximo</Button>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <TextField
                    label="Placa"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <TextField
                    label="Ano Modelo"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />
                <FormControl className={classes.formControl}>
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <TextField
                    label="Código FIPE"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />
                <TextField
                    label="MARCA"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />
                <FormControl className={classes.formControl}>
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

                <FormControl className={classes.formControl} fullWidth>
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

                <FormControl className={classes.formControl} fullWidth>
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
                <FormControl className={classes.formControl}>
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />
                <TextField
                    label="Chassi"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />


                <div className={classes.btnContainer} >

                    <Button className={classes.button} color={"secondary"} variant="contained">Voltar</Button>
                    <Button className={classes.button} color={"primary"} variant="contained">Próximo</Button>
                </div>

                <p>Tipo seguro NOVO?</p><Input />
                <p>vigencia inicial</p><Input />
                <p>vigencia final</p><Input />
                <p>banco de maior relacionamento</p><Input />
                <p>observacoes</p><Input />
                <Button>Próximo</Button>

                <p>Tipo residencia</p><Input />
                <p>Qtd veiculos residencia</p><Input />
                <p>garagem na residencia</p><Input />
                <p>garagem no trabalho</p><Input />
                <p>garagem no local de estudo</p><Input />
                <p>funcao</p><Input />
                <p>distancia ate o trab</p><Input />
                <p>tipo de uso</p><Input />
                <p>pcd</p><Input />
                <p>km mensal</p><Input />
                <Button>Próximo</Button>

                <p>relacao segurado/condutor</p><Input />
                <p>nome ja tem</p><Input />
                <p>cpf ja tem</p><Input />
                <p>estado civil ja tem</p><Input />
                <p>genero ja tem</p><Input />
                <p>dta nascimento ja tem</p><Input />
                <p>habilitado desde</p><Input />
                <p>numero da habilitacao</p><Input />
                <Button>Próximo</Button>

                <p>coberturas</p>
                <p>tipo franquia</p><Input />
                <p>fator de ajuste</p><Input />
                <p>acessorios</p>
                <p>valor do kit gas</p><Input />
                <p>servicos</p>
                <p>assistencia</p><Input />
                <p>vidros</p><Input />
                <p>carro reserva</p><Input />
                <p>RCF</p>
                <p>danos materiais</p><Input />
                <p>danos corporais</p><Input />
                <p>danos morais</p><Input />
                <p>APP</p>
                <p>morte/invalidez</p><Input />

            </Form>
        </Container >
    )

}

export default CarInsurance;