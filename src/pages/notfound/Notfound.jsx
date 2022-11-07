import React from 'react';
import notFound from '../../image/notFound.gif';
import { Container, Row, Col } from 'react-bootstrap';

export function Notfound() {
    return (
        <Container className='p-5 text-center'>
            <Row className='justify-content-center w-100 mb-5'>
                <Col sm={5}><span className='h5'> Упс, Страница не найдена! </span><br /> 
                Возможно вы ошиблись или мы не доделали её.. Вернитесь назад.
                И попробуйте когда вернуться сюда когда мы все доделаем
                </Col>
            </Row>
            <Row>
                <Col><img src={notFound} alt="Изображение котика" width={450} className={'shadow'}/></Col>
            </Row>
        </Container>
    );
}

export default Notfound;