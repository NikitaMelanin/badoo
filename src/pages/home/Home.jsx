import React, {useState} from 'react';
import News from "./components/news/News";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Register from "../../authControl/register/Register";

export function Home() {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center mt-5 mb-3">
                    <Col md="auto">
                            <span className={'h3'}>Найди себя себе</span>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Col md="auto">
                        <Button onClick={showModal}> Создать аккаунт </Button>
                    </Col>
                </Row>
                <Row className={'mb-5'}></Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register onSubmit={handleClose} />
                </Modal.Body>
            </Modal>
            <News />
        </div>
    );
}

export default Home;