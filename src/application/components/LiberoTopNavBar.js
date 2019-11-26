import React from 'react';
import '../../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class LiberoTopNavBar extends React.PureComponent {

    state = {
        seguros: [
            "Carro",
            "Bike",
            "Consórcio",
            "Financiamentos",
            "Odontológico",
            "Portáteis",
            "Residencial",
            "Viagem",
            "Vida",
        ]
    };

    renderDropdownItens() {
        return this.state.seguros.map((l, i) => <NavDropdown.Item key={i} href={`/seguro/${l}`}>{l}</NavDropdown.Item>);
    }

    render() {

        return (
            <Navbar style={{ flex: 1, padding: 0 }} className="App-bar" fixed="top" expand="lg" variant="dark">
                <img alt='logo' href="#home" logo="top" src={require('../images/libero-header.jpg')} />
                <Navbar.Toggle style={{ margin: 8 }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ margin: 8 }} className="Header-links">

                        <Link
                            className={`nav-link ${this.props.location.pathname === '/' && "active"}`}
                            to="/">
                            <Icon name="home" />PAGINA INICIAL
                        </Link>

                        <Link
                            className={`nav-link ${this.props.location.pathname === '/about' && "active"}`}
                            to="/about">
                            <Icon name="question circle" />QUEM SOMOS
                        </Link>

                        <NavDropdown title="SEGUROS" id="collasible-nav-dropdown">
                            {this.renderDropdownItens()}
                        </NavDropdown>

                        <Link className={'nav-link'} to="/contato">
                            <Icon name="phone square" />ENTRE EM CONTATO
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default withRouter(LiberoTopNavBar);