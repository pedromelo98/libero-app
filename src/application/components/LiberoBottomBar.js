import React from 'react';
import '../styles/Footer.css'
import { Icon } from 'semantic-ui-react'

class LiberoBottomBar extends React.PureComponent {

    render() {
        return (
            <div className="Bottom-bar" >
                <div conteudo="bottom" >
                   <a href="/insurance" className="Bottom-item" >
                       <Icon size='big' name='shield' />
                       <p className='Bottom-text' >Seguros</p>
                   </a>
                   <a href="/" className="Bottom-item" >
                       <Icon size='big' name='home' />
                       <p className='Bottom-text' >Home</p>
                   </a>
                   <a href="/social" className="Bottom-item" >
                       <Icon size='big' name='whatsapp' />
                       <p className='Bottom-text' >Social</p>
                   </a>
                   <a href="" className="Bottom-item" >
                       <Icon size='big' name='phone' />
                       <p className='Bottom-text' >Contato</p>
                   </a>
                </div>
            </div>

        );
    }
}

export default LiberoBottomBar;
