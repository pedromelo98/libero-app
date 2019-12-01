import React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';

function RenderIntro(props) {

    const requestCall = event => {
        event.preventDefault();
        props.history.push("/seguro/ligacao");
    }
    if (isMobile) {
        return (
            <div className="Intro-Component" >
                <p className="Intro-font" >{props.title}</p>
                <div className="Mobile-Intro" >
                    <div id='gate' className="Image-Component" >
                        <img className="Mobile-Car" src={props.img} alt=""/>
                    </div>

                    <div className='Mobile-Button-View' >
                        <p>Solicite nossa proposta:</p>
                        <SemanticButton.Group size='mini' >
                            <SemanticButton onClick={props.handleForm}  >PREENCHER ONLINE</SemanticButton>
                            <SemanticButton.Or text='OU' />
                            <SemanticButton onClick={requestCall} color='green' >SOLICITAR LIGAÇÃO </SemanticButton>
                        </SemanticButton.Group>
                    </div>
                    <div />
                </div>
            </div>
        )
    }
    return (
        <div className="Intro-Component" >
            <p className="Intro-font" >{props.title}</p>
            <div className="Intro-View" >
                <div id='gate' className="Image-Component" >
                    <img className="Car-Image" src={props.img} alt="" />
                </div>

                <div className='Button-View' >
                    <p>Solicite nossa proposta:</p>
                    <SemanticButton.Group >
                        <SemanticButton onClick={props.handleForm} className="Button" >PREENCHER ONLINE</SemanticButton>
                        <SemanticButton.Or text='OU' />
                        <SemanticButton onClick={requestCall} color='green' >SOLICITAR LIGAÇÃO </SemanticButton>
                    </SemanticButton.Group>
                </div>
                <div />
            </div>
        </div>
    )
}

export default withRouter(RenderIntro);