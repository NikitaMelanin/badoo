import React, {useEffect, useState} from 'react';
import Post from "./Component/Post";
import Loader from "./Component/Loader";
import Error from "./Component/Error";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function News() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
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
    }, []);

    return (
        <Container>
            <Row>
                {error &&
                    <Error />
                }
                {
                    !isLoaded &&
                    <Loader />
                }
                {
                    items &&
                    items.map(item => (
                        <Col sm={4}>
                            <Post title={item.title} userId={items.userId} body={item.body}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default News;