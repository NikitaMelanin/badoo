import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import BuyPage from "./components/BuyPage";
import ListServicePage from "./components/ListServicePage";

export function Shop() {

    return (
        <div>
            <Container className='my-3'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Список услуг</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Купить услуги</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>fdsfdsfs</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <BuyPage />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <ListServicePage />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}

export default Shop;