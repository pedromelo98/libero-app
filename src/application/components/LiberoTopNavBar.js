import React from 'react';
import '../../App.css'
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
                    <NavDropdown.Item key={i} href={`#seguros/${l}`}>{l}</NavDropdown.Item>
                )
            })
        );

    }

    render() {
        return (
            <Navbar style={{ flex: 1, padding: 0 }} className="App-bar" fixed="top" expand="lg" variant="dark">
                <img alt='logo' href="#home" logo="top" src={require('../images/libero-header.jpg')} />
                <Navbar.Toggle style={{ margin: 8 }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ margin: 8 }} className="Header-links">
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