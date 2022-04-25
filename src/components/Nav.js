import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'


function Navigation() {

    return (
        <>
            <Navbar className="Navbar" collapseOnSelect expand='lg' variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">Smoking Rods Car Show</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href='/' className="nav-links">
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/VideoContent' className="nav-links">
                                Video Content
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/reviewPage' className="nav-links">
                                Review Page
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;