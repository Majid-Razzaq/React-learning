import { useState } from "react";
import { Button, Card, Form, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../../validation/registerSchema";
import { registerUser } from "../../../services/authService";

function RegistrationForm() {
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        setServerError("");
        setSuccessMessage("");

        try {
            const response = await registerUser(data);

            setSuccessMessage(response.data.message);

            reset();
        } catch (error) {
            if (error.response?.data?.message) {
                setServerError(error.response.data.message);
            } else {
                setServerError("Something went wrong.");
            }
        }
    };

    return (
        <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">

                <h2 className="mb-4">Create Account</h2>

                {serverError && (
                    <Alert variant="danger">
                        {serverError}
                    </Alert>
                )}

                {successMessage && (
                    <Alert variant="success">
                        {successMessage}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            {...register("name")}
                            isInvalid={!!errors.name}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.name?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            isInvalid={!!errors.email}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            {...register("password")}
                            isInvalid={!!errors.password}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                        type="submit"
                        className="w-100"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Spinner
                                    animation="border"
                                    size="sm"
                                    className="me-2"
                                />
                                Creating Account...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </Button>

                </Form>

            </Card.Body>
        </Card>
    );
}

export default RegistrationForm;