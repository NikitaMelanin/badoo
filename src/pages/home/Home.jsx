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
                <Row className="justify-content-md-center mt-5 mb-3">
                    <Col md="auto">
                            <span className={'h3'}>Найди себя себе</span>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Col md="auto">
                        <Button> Создать аккаунт </Button>
                    </Col>
                </Row>
                <Row className={'mb-5'}></Row>
            </Container>
            <hr/>
            <News />
        </div>
    );
}

export default Home;