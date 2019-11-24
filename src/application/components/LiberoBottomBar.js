import React from 'react';
import '../styles/Footer.css';
import { Icon } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class LiberoBottomBar extends React.PureComponent {

    setSelectedByPath(path) {
        if (this.props.location && path === this.props.location.pathname) {
            return 'Bottom-selected'
        }
        return 'Bottom-item'
    }

    render() {
        return (
            <div className="Bottom-bar" >
                <div conteudo="bottom" >
                    <Link to="/insurance" className={this.setSelectedByPath('/insurance')} >
                        <Icon size='big' name='shield' />
                        <p className='Bottom-text' >Seguros</p>
                    </Link>
                    <Link to="/" className={this.setSelectedByPath('/')} >
                        <Icon size='big' name='home' />
                        <p className='Bottom-text' >Home</p>
                    </Link>
                    <Link to="/social" className={this.setSelectedByPath('/social')} >
                        <Icon size='big' name='whatsapp' />
                        <p className='Bottom-text' >Social</p>
                    </Link>
                    <Link to="/cotact" className={this.setSelectedByPath('/contact')} >
                        <Icon size='big' name='phone' />
                        <p className='Bottom-text' >Contato</p>
                    </Link>
                </div>
            </div>

        );
    }
}

export default withRouter(LiberoBottomBar);
