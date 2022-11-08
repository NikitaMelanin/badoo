import React, {useEffect, useState} from 'react';
import Post from "./Component/Post";
import Loader from "./Component/Loader";
import Error from "./Component/Error";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

export function News() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(8);

    const addPage = () => {
        setIsLoaded(false);
        setPage(page + 8);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit="+page)
            .then(res => res.json())
            .then(
                (res) => {
                    setItems(res);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                }
            );
    }, [page]);

    return (
        <Container>
            <Row className={"justify-content-md-center my-5"}>
                <Col md="auto">
                    <h3>Dev blog</h3>
                </Col>
            </Row>
            <Row className={"justify-content-md-center"}>
                {
                    error &&
                    <Row className={"justify-content-md-center mt-5"}>
                        <Col md="auto">
                            <Error message={"Произошла ошибка, попробуйте перезапустить страницу"}/>
                        </Col>
                    </Row>
                }
                {
                    !isLoaded &&
                    <Row className={"justify-content-md-center mt-5"}>
                        <Col md="auto">
                            <Loader />
                        </Col>
                    </Row>
                }
                {
                    items &&
                    items.map(item => (
                        <Col className={'mb-3'}>
                            <Post postId={item.id} title={item.title} userId={item.userId} body={item.body}/>
                        </Col>
                    ))
                }
                {isLoaded ? <Button className={'w-25 my-5'} onClick={addPage}>Загрузить ещё</Button> : <Button className={'w-25 my-5'} disabled>Загрузить ещё</Button> }
            </Row>
        </Container>
    );
}

export default News;