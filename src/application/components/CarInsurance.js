import React from 'react'
import '../../App.css';
import { Input,Dropdown, Button } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';

function CarInsurance(props){
    const gen = [{text:"Masculino", value:"Masculino"},
                 {text:"Feminino", value:"Feminino"}]

    const sts = [{text:"Solteiro(a)", value:"Solteiro(a)"},
                 {text:"Casado(a)", value:"Casado(a)"},
                 {text:"Viúvo(a)", value:"Viúvo(a)"},
                 {text:"Divorciado(a)", value:"Divorciado(a)"}]
    
    return(
        <Form>

            <p>Nome Completo</p><Input/>
            <p>CPF/CNPJ</p><Input/>
            <p>Data de Nascimento</p><Input/>
            <p>Gênero</p><Dropdown  placeholder='Selecione o gênero' selection options={gen}/>
            <p>Estado Civil</p><Dropdown placeholder='Selecione o Estado Civil' selection options={sts}/>
            <Button>Próximo</Button>
            
            <p>Email</p><Input/>
            <p>Celular</p><Input/>
            <p>Fixo</p><Input/>
            <Button>Próximo</Button>

            <p>Placa</p><Input/>
            <p>Ano modelo</p><Input/>
            <p>Zero?S/N</p><Input/>
            <p>Modelo</p><Input/>
            <p>Codigo FIPE</p><Input/>
            <p>Marca</p><Input/>
            <p>Combustivel</p><Input/>
            <p>Possui kit gas</p><Input/>
            <p>Alienado/FInanciado</p><Input/>
            <p>Rastreador</p><Input/>
            <p>Antifurto</p><Input/>
            <p>CEP pernoite</p><Input/>
            <p>Chassi</p><Input/>
            <Button>Próximo</Button>

            <p>Tipo seguro NOVO?</p><Input/>
            <p>vigencia inicial</p><Input/>
            <p>vigencia final</p><Input/>
            <p>banco de maior relacionamento</p><Input/>
            <p>observacoes</p><Input/>
            <Button>Próximo</Button>
            
            <p>Tipo residencia</p><Input/>
            <p>Qtd veiculos residencia</p><Input/>
            <p>garagem na residencia</p><Input/>
            <p>garagem no trabalho</p><Input/>
            <p>garagem no local de estudo</p><Input/>
            <p>funcao</p><Input/>
            <p>distancia ate o trab</p><Input/>
            <p>tipo de uso</p><Input/>
            <p>pcd</p><Input/>
            <p>km mensal</p><Input/>
            <Button>Próximo</Button>

            <p>relacao segurado/condutor</p><Input/>
            <p>nome ja tem</p><Input/>
            <p>cpf ja tem</p><Input/>
            <p>estado civil ja tem</p><Input/>
            <p>genero ja tem</p><Input/>
            <p>dta nascimento ja tem</p><Input/>
            <p>habilitado desde</p><Input/>
            <p>numero da habilitacao</p><Input/>
            <Button>Próximo</Button>

            <p>coberturas</p>
            <p>tipo franquia</p><Input/>
            <p>fator de ajuste</p><Input/>
            <p>acessorios</p>
            <p>valor do kit gas</p><Input/>
            <p>servicos</p>
            <p>assistencia</p><Input/>
            <p>vidros</p><Input/>
            <p>carro reserva</p><Input/>
            <p>RCF</p>
            <p>danos materiais</p><Input/>
            <p>danos corporais</p><Input/>
            <p>danos morais</p><Input/>
            <p>APP</p>
            <p>morte/invalidez</p><Input/>

        </Form>
    )

}

export default CarInsurance;