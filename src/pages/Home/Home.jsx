import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function Home() {
    return (
        <Container>

            <Row className="justify-content-center">

                <Col lg={6}>

                    <Card className="shadow border-0 rounded-4">

                        <Card.Body className="p-5">

                            <h2 className="fw-bold mb-2">
                                Create Account
                            </h2>

                            <p className="text-muted mb-4">
                                Register to continue.
                            </p>

                            <Form>

                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    className="w-100"
                                >
                                    Create Account
                                </Button>

                            </Form>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>
    );
}

export default Home;