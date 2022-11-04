import React from 'react';
import Alert from 'react-bootstrap/Alert';

export function Error(props) {
    return (
        <Alert variant={'danger'}>
            {props.message}
        </Alert>
    );
}

export default Error;