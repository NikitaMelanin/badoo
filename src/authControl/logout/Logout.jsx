import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Logout({onSubmit}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        onSubmit(false)
    }

    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between py-3">                
                <Button variant="danger" type="submit" className={''}>
                    Sign out
                </Button>
            </div>
        </Form>
    </div>
    );
}

export default Logout;