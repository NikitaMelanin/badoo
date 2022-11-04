import React from 'react';
import News from "./components/news/News";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

export function Home() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center my-5">
                    <Col md="auto">
                            Найди себя себе
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button> Создать аккаунт </Button>
                    </Col>
                </Row>
            </Container>

            <News />
        </div>
    );
}

export default Home;