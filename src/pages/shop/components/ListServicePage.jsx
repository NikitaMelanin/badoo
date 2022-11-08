import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function ListServicePage() {
    return (
        <Container>
            <Row className={'justify-content-md-center'}>
                <Col md={'auto'}>Список услуг</Col>
            </Row>
            <Row>
                <Col className={'p-3'}>
                        <p>Важная информация:</p>
                        <p>TCoins являются бонусными игровыми очками, которые можно обменять на дополнительные услуги в игровом мире TrinityGTA. Что такое TCoins, как ими пользоваться, и для чего они нужны, можно узнать в теме с описанием платных услуг на нашем форуме. При покупке TCoins обязательно указывайте реально существующий email адрес, к которому вы имеете доступ. После успешной оплаты, на указанный вами адрес электронной почты придет код для ручной активации TCoins. Автоматически получить купленные TCoins можно будет нажав на пункт «Проверить поступления TCoins» в меню /donate.</p>
                        <p>Контактная информация:</p>
                        <p>В случае возникновения любых проблем с платежом, вам следует обратиться в соответствующую тему на нашем форуме.</p>
                        <p>
                            <ul>
                                <li>Для чего могут быть использованы TCoins:</li>
                                <li>С помощью TCoins можно поднять скилл в любой из профессий</li>
                                <li>C помощью TCoins вы можете снять со своего аккаунта предупреждения от администрации (варны)</li>
                                <li>Вы можете приобрести premium статус для своего аккаунта за TCoins</li>
                                <li>TCoins можно обменять на игровую валюту. Текущий курс: 1 TCoins = 500 $</li>
                            </ul>
                        </p>
                        <p>Укажите количество TCoins, ник получателя и email, на который будет выслан код для ручной активации:</p>
                        <p>Стоимость одного TCoin равна одному рублю.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ListServicePage;