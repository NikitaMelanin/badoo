import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

export function Post(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {props.userId}</Card.Subtitle>
                <Card.Text>
                    {props.body}
                </Card.Text>
                <Card.Link><Link to={'/dev-blog-post/'+props.postId} className={'inheritAll'}>Read more</Link></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Post;