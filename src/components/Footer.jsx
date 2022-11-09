import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TmpIcon from './TmpIcon';
import './style/footer-style.css';

export function Footer() {
    return (
        <div className='footer-style-container'>
            <Container className={'footer-style light align-middle'}>
                <Row className={'p-4 text-center'}>
                    <Col>
                        <Row className='justify-content-center'>
                            <Col sm={2}>Russian Badoo <br /> UrFU Inc.</Col>
                            <Col sm={1}><TmpIcon /> <br /> converse life</Col>
                            <Col sm={4}>
                                <Row>
                                    <Col className='h5'>Секция по связям</Col>
                                </Row>
                                    <Row><Col>Техническая поддержка</Col></Row>
                                    <Row><Col>Контактный номер</Col></Row>
                                    <Row><Col>Электронная почта</Col></Row>
                                    <Row><Col>Физический адрес</Col></Row>
                            </Col>
                            <Col sm={4}>
                                <Row>
                                    <Col className='h5'>Навигация по сайту</Col>
                                </Row>
                                    <Row><Col><a href={'/admin'} className={'inheritAll'}>Панель администратора</a></Col></Row>
                                    <Row><Col>Контактный номер</Col></Row>
                                    <Row><Col>Электронная почта</Col></Row>
                                    <Row><Col>Физический адрес</Col></Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;