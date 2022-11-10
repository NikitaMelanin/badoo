import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login() {
    const eventFunc = () => {
        fetch("http://localhost:8000/api/login_check", {
            method: "POST",
            body: JSON.stringify({"username": loginFormUsername.current.value, "password": loginFormPassword.current.value})
        })
            .then((response) => (response.json()))
            .then((response) => {
                localStorage.setItem('token', response.token);
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const loginFormUsername = useRef(null);
    const loginFormPassword = useRef(null);
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" ref={loginFormUsername} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={loginFormPassword} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={eventFunc}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;