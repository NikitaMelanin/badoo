import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftMenu from './components/LeftMenu';

export function Shop() {

    const [isActive, setIsActive] = useState([true, false, false, false]);

    return (
        <div>
            <Container className='my-3'>
                <Row className='justify-content-center'>
                    <Col sm={3}><LeftMenu isActive={isActive}/></Col>
                    <Col className={'border-solid-black'}>15</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Shop;