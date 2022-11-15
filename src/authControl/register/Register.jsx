import React, {useRef} from 'react';
import {Endpoint} from "../../Endpoint";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function Register({onSubmit}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ "username": loginFormUsername.current.value, "password": loginFormPassword.current.value} ))
        fetch(Endpoint.registerUserRoute(), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": loginFormUsername.current.value, "password": loginFormPassword.current.value} )
        })
            .then((response) => (response.json()))
            .then((response) => {
                localStorage.setItem('token', response.token);
                onSubmit(true)
            }, (error) => {
                console.error(error)
            })
    };

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
                <div className="d-flex justify-content-between py-3">
                    <Button variant="success" type="submit" className={'float-left'}>
                        Create account
                    </Button>
                </div>

            </Form>
        </div>
    );
}

export default Register;