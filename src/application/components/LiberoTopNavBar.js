import React from 'react';
import '../../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import * as LINKS from '../constants/Links'

class LiberoTopNavBar extends React.PureComponent {

    state = {
        seguros: [
            { name: "Carro", link: "/seguro/carro" },
            { name: "Eventos", link: "/seguro/eventos" },
            { name: "Cargas", link: "/seguro/cargas" },
            { name: "Bike", link: "/seguro/bike" },
            { name: "Residencial", link: LINKS.LINK_RESIDENCIAL },
            { name: "Empresarial", link: "/seguro/empresarial" },
            { name: "Condomínio", link: "/seguro/condominio" },
            { name: "Viagem", link: LINKS.LINK_VIAGEM },
            { name: "Vida Individual", link: LINKS.LINK_VIDA_INDIVIDUAL },
            { name: "Portáteis", link: LINKS.LINK_PORTATEIS },
            { name: "Odontológico", link: LINKS.LINK_ODONTOLOGICO },
            { name: "Financiamentos", link: "/seguro/financiamentos" },
        ]
    };

    renderDropdownItens() {
        return this.state.seguros.map((l, i) => <NavDropdown.Item key={i} href={l.link}>{l.name}</NavDropdown.Item>);
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