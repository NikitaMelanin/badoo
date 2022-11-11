import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '../components/LoginIcon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from '../authControl/login/Login';

export function Header(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleStatusShow = (value) => {
        setShow(!value);
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
                        <Nav.Link onClick={handleShow}><LoginIcon /> My accounts</Nav.Link>
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