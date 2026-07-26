import { Container, Nav, Navbar } from "react-bootstrap";

function AppNavbar() {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm py-3">
            <Container>

                <Navbar.Brand className="fw-bold">
                    React Starter
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav className="ms-auto">

                        <Nav.Link href="/">
                            Home
                        </Nav.Link>

                        <Nav.Link href="/">
                            About
                        </Nav.Link>

                        <Nav.Link href="/">
                            Contact
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default AppNavbar;