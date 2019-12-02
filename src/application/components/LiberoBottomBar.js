import React from 'react';
import '../styles/Footer.css';
import { Icon } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class LiberoBottomBar extends React.PureComponent {

    setSelectedByPath(path) {
        if (this.props.location && path === this.props.location.pathname) {
            return 'Bottom-selected';
        }
        return 'Bottom-item';
    }

    render() {
        return (
            <div className="Bottom-bar" >
                <div conteudo="bottom" >
                    <Link to="/" className={this.setSelectedByPath('/')} >
                        <Icon size='big' name='home' />
                        <p className='Bottom-text' >Home</p>
                    </Link>
                    <Link to="/seguros" className={this.setSelectedByPath('/seguros')} >
                        <Icon size='big' name='shield' />
                        <p className='Bottom-text' >Seguros</p>
                    </Link>
                    <Link to="/redesocial" className={this.setSelectedByPath('/redesocial')} >
                        <Icon size='big' name='whatsapp' />
                        <p className='Bottom-text' >Social</p>
                    </Link>
                    <Link to="/contato" className={this.setSelectedByPath('/contato')} >
                        <Icon size='big' name='phone' />
                        <p className='Bottom-text' >Contato</p>
                    </Link>
                </div>
            </div>

        );
    }
}

export default withRouter(LiberoBottomBar);
