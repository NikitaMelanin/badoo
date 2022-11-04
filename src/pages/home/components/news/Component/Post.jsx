import React from 'react';
import Card from 'react-bootstrap/Card';

export function Post(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {props.userId}</Card.Subtitle>
                <Card.Text>
                    {props.body}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Post;