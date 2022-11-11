import React, {useEffect, useState} from 'react';
import Loader from "../home/components/news/Component/Loader";
import Error from "../home/components/news/Component/Error";
import {Container, Row, Col, Badge} from 'react-bootstrap';
import ProfileSlider from "./components/ProfileSlider";



export function Profile() {
    const [user, setUser] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken ] = useState(localStorage.getItem('token'));

    useEffect(() => {
        fetch("http://localhost:8000/api/user/check/me", {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(
                (res) => {
                    if(res.code === null) {
                        setUser(res);
                    } else {
                        setUser("test");
                    }
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                }
            );
    },[]);

    return (
        <div>
            {!isLoaded &&
                <Loader />
            }
            {error !== null &&
                <Error message={JSON.stringify(error)} />
            }
            {user &&
                <Container className={'bg-light'}>
                    <Row className={'justify-content-md-center mb-5'}>
                        <Col md={'auto'}>
                            <h4>Твой личный профиль!</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className={'p-2'}>
                            <div className={'md-auto'}>
                                <ProfileSlider />
                            </div>
                        </Col>
                        <Col className={'p-3'}>
                            <Row>
                                <Col className={'h5'}>
                                    Имя
                                </Col>
                                <Col className={'h5'}>
                                    Фамилия
                                </Col>
                                <Col className={'h5'}>
                                    25
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-muted'}>
                                    Ulitsa Malysheva, 71 Yekaterinburg, Sverdlovskaya oblast', 620075
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-muted'}>
                                    Yekaterinburg, Sverdlovskaya oblast'
                                </Col>
                            </Row>
                            <Row className={'my-2'}>
                                <Col>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br />
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br />
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br />
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <Col>
                                        Интересы
                                    </Col>
                                </Row>
                                <Row className={'bg-light justify-content-start mx-2 p-2'}>
                                    <Col sm={'auto'}>
                                        <Badge pill bg="secondary"  className={'py-1 px-3'}>
                                            Instagram
                                        </Badge>
                                    </Col>
                                    <Col sm={'auto'}>
                                        <Badge pill bg="secondary"  className={'py-1 px-3'}>
                                            Twitter
                                        </Badge>
                                    </Col>
                                    <Col sm={'auto'}>
                                        <Badge pill bg="secondary"  className={'py-1 px-3'}>
                                            Играть в футболл
                                        </Badge>
                                    </Col>
                                    <Col sm={'auto'}>
                                        <Badge pill bg="secondary"  className={'py-1 px-3'}>
                                            Дышать
                                        </Badge>
                                    </Col>
                                    <Col sm={'auto'}>
                                        <Badge pill bg="secondary"  className={'py-1 px-3'}>
                                            Прыгать
                                        </Badge>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <Col>
                                    User tag: <span className={'text-muted'}>@george</span>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            }
        </div>
    );
}

export default Profile;