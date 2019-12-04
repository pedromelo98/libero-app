import React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';
import '../styles/CarInsurance.css';
import '../screens/Screens.css';

import { REDIRECT_OTHERS } from '../constants/Links'

class RenderIntro extends React.Component {

    render() {
        if (isMobile) {
            return (
                <div className="Intro-Component" >
                    <p className="Intro-font" >{this.props.title}</p>
                    <div className="Mobile-Intro" >
                        <div id='gate' className="Image-Component" >
                            <img className="Mobile-Car" src={this.props.img} alt="" />
                        </div>

                        <div className='Mobile-Button-View' >
                            <p>{this.props.titlePhrase}</p>
                            {this.props.haveForm
                                ?
                                <SemanticButton.Group size='mini' >
                                    <SemanticButton href={this.props.redirect}  >PREENCHER ONLINE</SemanticButton>
                                    <SemanticButton.Or text='OU' />
                                    <SemanticButton href={REDIRECT_OTHERS} color='green' >SOLICITAR LIGAÇÃO </SemanticButton>
                                </SemanticButton.Group>
                                :
                                <SemanticButton href={REDIRECT_OTHERS} color='green' >SOLICITAR PROPOSTA </SemanticButton>
                            }
                        </div>
                        <div />
                    </div>
                </div>

            )
        }
        return (
            <div className="Intro-Component" >
                <p className="Intro-font" >{this.props.title}</p>
                <div className="Intro-View" >
                    <div id='gate' className="Image-Component" >
                        <img className="Car-Image" src={this.props.img} alt="" />
                    </div>

                    <div className='Button-View' >
                        <p>{this.props.titlePhrase}</p>
                        {this.props.haveForm
                            ?
                            <SemanticButton.Group >
                                <SemanticButton href={this.props.redirect} className="Button" >PREENCHER ONLINE</SemanticButton>
                                <SemanticButton.Or text='OU' />
                                <SemanticButton href={REDIRECT_OTHERS} color='green' >SOLICITAR LIGAÇÃO </SemanticButton>
                            </SemanticButton.Group>
                            :
                            <SemanticButton href={REDIRECT_OTHERS} color='green' >SOLICITAR PROPOSTA </SemanticButton>
                        }

                    </div>
                    <div />
                </div>
            </div>
        )
    }
}

export default withRouter(RenderIntro);