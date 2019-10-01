import React from 'react';
import './NavBar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'

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
        return (
            this.state.seguros.map((l, i) => {
                return (
                    <NavDropdown.Item href={`#seguros/${l}`}>{l}</NavDropdown.Item>
                )
            })
        )

    }

    render() {
        return (
            <Navbar className="App-bar" fixed="top" collapseOnSelect expand="lg" variant="dark">
                <img href="#home" width={150} src={require('../images/libero-logo.png')} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="Header-links">
                        <Nav.Link href="#inicio"><Icon name="home" />PAGINA INICIAL</Nav.Link>
                        <Nav.Link href="#sobre"><Icon name="question circle" />QUEM SOMOS</Nav.Link>
                        <NavDropdown title="SEGUROS" id="collasible-nav-dropdown">
                            {this.renderDropdownItens()}
                        </NavDropdown>
                        <Nav.Link href="#contato"><Icon name="phone square" />ENTRE EM CONTATO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default LiberoTopNavBar;
