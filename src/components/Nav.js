import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'


function Navigation() {
    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(false)


    return (
        <>
            <Navbar>
                <Container fluid>
                    <Nav>
                        <Nav.Link href='/' className="=nav-links">
                            Home
                        </Nav.Link>

                        <Nav.Link href='/VideoContent' className="=nav-links">
                            Video Content
                        </Nav.Link>

                        <Nav.Link href='/reviewPage' className="=nav-links">
                            Review Page
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;