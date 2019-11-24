import React from 'react';
import '../../App.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class LiberoTopNavBar extends React.PureComponent {

    state = {
        seguros: [
            "Bike",
            "Consórcio",
            "Financiamentos",
            "Odontológico",
            "Portáteis",
            "Residencial",
            "Viagem",
            "Vida",
        ]
    }

    renderDropdownItens() {
        return this.state.seguros.map((l, i) => <NavDropdown.Item key={i} href={`#seguros/${l}`}>{l}</NavDropdown.Item>);

    }

    render() {

        return (
            <Navbar style={{ flex: 1, padding: 0 }} className="App-bar" fixed="top" expand="lg" variant="dark">
                <img alt='logo' href="#home" logo="top" src={require('../images/libero-header.jpg')} />
                <Navbar.Toggle style={{ margin: 8 }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ margin: 8 }} className="Header-links">
                        
                        <Link
                            className={`top-link ${this.props.location.pathname === '/' && "active"}`}
                            to="/">
                            <Icon name="home" />
                            <p>PAGINA INICIAL</p>
                        </Link>

                        <Link
                            className={`top-link ${this.props.location.pathname === '/about' && "active"}`}
                            to="/about">
                            <Icon name="question circle" />
                            <p>QUEM SOMOS</p>
                        </Link>
                        
                        <NavDropdown className={'top-link'} title="SEGUROS" id="collasible-nav-dropdown">
                            {this.renderDropdownItens()}
                        </NavDropdown>

                        <Link className={`top-link ${this.props.location.pathname === '/contato' && "active"}`} to="/contato">
                            <Icon name="phone square" />
                            <p>ENTRE EM CONTATO</p>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default withRouter(LiberoTopNavBar);