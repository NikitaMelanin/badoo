import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';

export function UserList() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState([]);
    const [test, setTest] = useState();

    useEffect(() => {
        fetch("http://public/admin/users", {
            Method: 'GET',
            Port: '80',
            Host: 'public'
        })
            .then((response) => response.header('Access-Control-Allow-Origin', '*'))
            .then((response) => response.json())
            .then(
                (responseJson) => {
                    setUsers(responseJson.userList);
                    }, (error) => {
                    setMessage(JSON.stringify(error));
                    }
            );
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>username</th>
                <th>userIdentifier</th>
                <th>roles</th>
            </tr>
            </thead>
            <tbody>

                {users.userList &&
                    users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.userIdentifier}</td>
                            <td>{user.roles}</td>
                        </tr>
                    ))
                }
            </tbody>
            {JSON.stringify(message)}
        </Table>
    );
}

export default UserList;