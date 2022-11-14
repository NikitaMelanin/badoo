import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '../icon/LoginIcon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from '../authControl/login/Login';
import { useEffect } from 'react';
import Logout from '../authControl/logout/Logout';
import Person from "../icon/Person";
import {Endpoint} from '../Endpoint';

export function Header(props) {
    const [show, setShow] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    
    useEffect(() => {
        if(token === null) {
            setIsAuth(false);
        } else {
            setIsAuth(true);
            fetch(Endpoint.checkMeRoute(), {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            .then((response) => (response.json()))
            .then((response) => {
                setUser(response);
            })
        }
    }, [show])

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleStatusShow = (value) => {
        setShow(!value);
        setToken(localStorage.getItem('token'));
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        { props.children }
                    </Nav>
                    <Nav className="me-auto">
                        {isAuth ?
                            <>
                                <Navbar.Text className='mx-5'><div className='my-4'><Person /> {user.username}</div> </Navbar.Text>
                                <Navbar.Text><Logout onSubmit={handleStatusShow} /></Navbar.Text>
                            </>
                        : 
                            <Nav.Link onClick={handleShow}><LoginIcon />My accounts</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Authorization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login onSubmit={handleStatusShow} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Header;