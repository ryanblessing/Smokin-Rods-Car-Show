import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar
        className="Navbar"
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href="/" variant="dark">
            Smoking Rods Car Show
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/" className="nav-links">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/VideoContent" className="nav-links">
                Video Content
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/calendarPage" className="nav-links">
                Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/reviewPage" className="nav-links">
                Review Page
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/teamPage" className="nav-links">
                Our Team
              </Nav.Link>
            </Nav.Item>

            <Form id="nav-search-form" className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
