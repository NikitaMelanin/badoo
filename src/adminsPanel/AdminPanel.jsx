import React, {useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Nav, Tab} from "react-bootstrap";
import UserList from "./components/UserList";
import Login from "../authControl/login/Login";
import Button from 'react-bootstrap/Button';
import {useNavigate, Navigate} from "react-router-dom";

export function AdminPanel() {
    const token = localStorage.getItem('token');

    if(token === null) {
        return <>
            <Navigate to='/'  />
        </>
    }
    
    return (
        <div className={'bg-secondary'} style={{height: '100vh'}}>
            <Container className={'py-5 bg-light'}>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <a href="/">
                                        <Button className={'btn-warning w-100'}>Вернуться на главную</Button>
                                    </a>
                                    <hr/>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Список пользователь</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Тест модалок</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <UserList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div style={{border: '0px solid black'}}>
                                                <div className={'p-5'}>
                                                    <Login />
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AdminPanel;