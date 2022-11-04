import react, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Loader from "../news/Component/Loader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function Postpage(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then((res) => {
                setPost(res)
                setIsLoaded(true);
            }, (error) => {
                console.log(error);;
            })
    },[]);
    return (
        <Container>
            <Row className={"justify-content-md-center my-5"}>
                <Col className={"col-md-auto"}>
                    {!isLoaded &&
                        <Loader />
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    {post.id}
                </Col>
                <Col>
                    {post.title}
                </Col>
                <Col>
                    {post.body}
                </Col>
                <Col>
                    {post.userId}
                </Col>
            </Row>
        </Container>
    );
}

export default Postpage;