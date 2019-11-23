import React from 'react';
import '../../App.css'
import { Icon } from 'semantic-ui-react'

class LiberoBottomBar extends React.PureComponent {

    render() {
        return (
            <div className="Bottom-bar" >
                <div conteudo="bottom" >
                   <div className="Bottom-item" >
                       <Icon size='big' name='shield' />
                       <p className='Bottom-text' >Seguros</p>
                   </div>
                   <div className="Bottom-item" >
                       <Icon size='big' name='home' />
                       <p className='Bottom-text' >Home</p>
                   </div>
                   <div className="Bottom-item" >
                       <Icon size='big' name='whatsapp' />
                       <p className='Bottom-text' >Social</p>
                   </div>
                   <div className="Bottom-item" >
                       <Icon size='big' name='phone' />
                       <p className='Bottom-text' >Contato</p>
                   </div>
                </div>
            </div>

        );
    }
}

export default LiberoBottomBar;
