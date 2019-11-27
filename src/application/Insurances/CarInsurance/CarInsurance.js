import React, { useState, useRef, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';
import { Container, Select } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MaterialButton from '@material-ui/core/Button';
import '../../styles/CarInsurance.css';
import '../../screens/Screens.css';
import GenInfoForm from './GeneralInsurance';

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
    },
    timeout: {
        transition: '.3s'
    }

}));


function CarInsurance() {
    const [animationFinished, setAnimationFinished] = useState(false);
    const classes = useStyles();
    const [lw, setLw] = useState(0);
    const fc = useRef(null);

    useEffect(() => {

        setLw("Carro Reserva".length * 8);//fc.current.offsetWidth/2);
    });


    const renderIntro = () => {

        return (
            <div className="Intro-Component" >
                <p className="Intro-font" >Seguro Auto Individual</p>
                <div className="Intro-View" >
                    <div id='gate' className="Image-Component" >
                        <img className="Car-Image" src={require('../../images/carro.jpg')} />
                    </div>
                    {animationFinished &&
                        <div className={`Button-View ${classes.timeout}`} >
                            <p>Solicite nossa proposta:</p>
                            <Button.Group >
                                <Button className="Button" >PREENCHER ONLINE</Button>
                                <Button.Or text='OU' />
                                <Button color='green' >SOLICITAR LIGAÇÃO </Button>
                            </Button.Group>
                        </div>
                    }

                    <div className="Image-Component" >
                        <img image='inverted' className="Car-Image" src={require('../../images/carro.jpg')} />
                    </div>
                </div>
            </div>
        )

    }


    // return renderIntro();
    return (
        <Container component="main" maxWidth="sm">


            <Form className={classes.form}>
                <GenInfoForm cls={classes}/>
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

                    <MaterialButton className={classes.button} color={"secondary"} variant="contained">Voltar</MaterialButton>
                    <MaterialButton className={classes.button} color={"primary"} variant="contained">Próximo</MaterialButton>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className={classes.formTitle}>

<h1>Veículo</h1>
</div>
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

                    <MaterialButton className={classes.button} color={"secondary"} variant="contained">Voltar</MaterialButton>
                    <MaterialButton className={classes.button} color={"primary"} variant="contained">Próximo</MaterialButton>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className={classes.formTitle}>

<h1>Seguro</h1>
</div>
                <FormControl className={classes.formControl}>
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <TextField
                    label="Vigência Final"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <FormControl fullWidth className={classes.formControl}>
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <div className={classes.btnContainer} >

                    <MaterialButton className={classes.button} color={"secondary"} variant="contained">Voltar</MaterialButton>
                    <MaterialButton className={classes.button} color={"primary"} variant="contained">Próximo</MaterialButton>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <div className={classes.formTitle}>

                    <h1>Questionário</h1>
                </div>
                <FormControl className={classes.formControl}>
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

                <FormControl fullWidth className={classes.formControl}>
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

                <FormControl className={classes.formControl}>
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

                <FormControl className={classes.formControl}>
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
                <FormControl fullWidth className={classes.formControl}>
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <FormControl fullWidth className={classes.formControl}>
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


                <FormControl fullWidth className={classes.formControl}>
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <div className={classes.btnContainer} >

                    <MaterialButton className={classes.button} color={"secondary"} variant="contained">Voltar</MaterialButton>
                    <MaterialButton className={classes.button} color={"primary"} variant="contained">Próximo</MaterialButton>
                </div>

                <br />
                <br />
                <br />
                <br />
                <div className={classes.formTitle}>

<h1>Condutor Principal</h1>
</div>
                <FormControl fullWidth className={classes.formControl}>
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

                <TextField className={classes.input} id="flemis-basic" label="Nome completo" fullWidth variant="outlined" />

                <TextField className={classes.input} id="cpf" label="CPF" fullWidth variant="outlined" />

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

                <TextField className={classes.input} id="cucu-basic" label="Habilitado  Desde" fullWidth variant="outlined" />

                <TextField className={classes.input} id="hab-basic" label="Número da Habilitação" fullWidth variant="outlined" />

                <div className={classes.btnContainer} >

                    <MaterialButton className={classes.button} color={"secondary"} variant="contained">Voltar</MaterialButton>
                    <MaterialButton className={classes.button} color={"primary"} variant="contained">Próximo</MaterialButton>
                </div>

                <br />
                <br />
                <br />
                <br />

                <div className={classes.formTitle}>

<h1>Coberturas</h1>
</div>

                <FormControl fullWidth className={classes.formControl}  >
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <p>servicos</p>

                <FormControl fullWidth className={classes.formControl}  >
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
                <FormControl fullWidth className={classes.formControl}  >
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
                <FormControl ref={fc} variant={"outlined"} fullWidth className={classes.formControl}  >
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
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <TextField
                    label="Danos Corporais"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <TextField
                    label="Danos Morais"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />

                <p>APP</p>

                <TextField
                    label="Danos Morais"
                    type="text"
                    className={classes.input}
                    fullWidth
                    variant="outlined" />
                <div className={classes.btnContainer} >

                    <MaterialButton className={classes.button} color={"secondary"} variant="contained">Voltar</MaterialButton>
                    <MaterialButton className={classes.button} color={"primary"} variant="contained">Próximo</MaterialButton>
                </div>

            </Form>
        </Container >
    )
}



export default CarInsurance;