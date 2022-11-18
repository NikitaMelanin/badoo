import React, { useRef, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Endpoint } from "../../Endpoint";
import TokenContext from '../TokenContext';
import UserContext from '../UserContext';

export function Login({ onSubmit }) {

    const { user, setUser } = useContext(UserContext);
    const { token, setToken } = useContext(TokenContext);

    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(Endpoint.loginRoute(), {
            method: "POST",
            body: JSON.stringify({ "username": loginFormUsername.current.value, "password": loginFormPassword.current.value })
        })
            .then((response) => (response.json()))
            .then((response) => {
                localStorage.setItem('token', response.token);
                setToken(response.token);
                onSubmit(true);
            }, (error) => {
                console.error(error)
            })
    }

    const addUser = () => {
        fetch(Endpoint.checkMeRoute(), {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((response) => (response.json()))
            .then((response) => {
                setUser(response);
                document.title = "Hello! " + response.username;
            }, error => {
                console.log(error)
            });
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
                        Sign in
                    </Button>
                    <Button className={'float-right'}>
                        Sign up
                    </Button>
                </div>

            </Form>
        </div>
    );
}

export default Login;