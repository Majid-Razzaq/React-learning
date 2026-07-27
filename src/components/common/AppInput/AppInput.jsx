import { Form } from "react-bootstrap";

function AppInput({
    label,
    type = "text",
    placeholder,
    ...props
}) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>

            <Form.Control
                type={type}
                placeholder={placeholder}
                {...props}
            />
        </Form.Group>
    );
}

export default AppInput;