import React, { useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../UserContext';

export function Logout({ onSubmit }) {
    const { user, setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        onSubmit(false);
        setUser([]);
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