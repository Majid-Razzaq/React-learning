import { Button } from "react-bootstrap";

function AppButton({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}) {
    return (
        <Button
            variant={variant}
            type={type}
            className={className}
            {...props}
        >
            {children}
        </Button>
    );
}

export default AppButton;