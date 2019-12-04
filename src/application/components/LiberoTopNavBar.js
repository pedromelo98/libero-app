import React from 'react';
import '../../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import * as LINKS from '../constants/Links';

class LiberoTopNavBar extends React.PureComponent {

    state = {
        seguros: [
            { name: "Auto", link: LINKS.LINK_AUTO },
            { name: "Riscos agrícolas", link: LINKS.LINK_AGRICOLAS },
            { name: "Cargas", link: LINKS.LINK_CARGAS },
            { name: "Bike", link: LINKS.LINK_BIKE },
            { name: "Residencial", link: LINKS.LINK_RESIDENCIAL },
            { name: "Empresarial", link: LINKS.LINK_EMPRESARIAL },
            { name: "Condomínio", link: LINKS.LINK_CONDOMINIO },
            { name: "Viagem", link: LINKS.LINK_VIAGEM },
            { name: "Vida Individual", link: LINKS.LINK_VIDA_INDIVIDUAL },
            { name: "Portáteis", link: LINKS.LINK_PORTATEIS },
            { name: "Odontológico", link: LINKS.LINK_ODONTOLOGICO },
            { name: "Financiamentos", link: LINKS.LINK_FINANCIAMENTOS },
            { name: "Outro", link: LINKS.LINK_LIGACAO },
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
                        <div className="Row-adjust" >
                            <img style={{ width: 22, height: 20, marginTop: 5, marginRight: 5, marginLeft: 5 }} src={require("../images/liberoicon.png")} />
                            <NavDropdown title="SEGUROS" id="collasible-nav-dropdown">
                                {this.renderDropdownItens()}
                            </NavDropdown>
                        </div>

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