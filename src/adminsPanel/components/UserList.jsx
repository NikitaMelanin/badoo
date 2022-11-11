import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function UserList() {
    const [users, setUsers] = useState([]);
    const [countPage, setCountPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([]);
    const [token, setToken ] = useState(localStorage.getItem('token'));



    useEffect(() => {

        fetch("http://localhost:8000/api/users", {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((response) => response.json())
            .then(
                (response) => {
                    setCountPage(response.countPage);
                    setCurrentPage(response.currentPage);
                    setUsers(response.userList);
                    }, (error) => {
                        console.error(error)
                    }
            );
    });

    useEffect( () => {
        let tmpPage = pages;
        for (let start = 1; start < countPage + 1; start++) {
            tmpPage.push(
                <Pagination.Item key={start} active={start === currentPage}>
                    {start}
                </Pagination.Item>,
            );
        }
        setPages(tmpPage);
        },[currentPage]
    );

    return (
        <div>
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

                    {users &&
                        users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.userIdentifier}</td>
                                <td>{user.roles.map((role) => (
                                    role + ' | '
                                ))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Container >
                <Row className={'justify-content-md-center'}>
                    <Col md="auto">
                        <Pagination>
                            {pages}
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserList;