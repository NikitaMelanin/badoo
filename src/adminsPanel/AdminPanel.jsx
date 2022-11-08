import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Nav, Tab} from "react-bootstrap";
import UserList from "./components/UserList";

export function AdminPanel() {
    return (
        <Container className={'my-5'}>
            <Row>
                <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Список пользователь</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <UserList />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminPanel;