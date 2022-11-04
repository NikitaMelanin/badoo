import React from 'react';
import Alert from 'react-bootstrap/Alert';

export function Error() {
    return (
        <Alert variant={'danger'}>
            Произошла ошибка, попробуйте перезапустить страницу
        </Alert>
    );
}

export default Error;