import React, {useContext, useEffect, useState} from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Header } from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer'
import UserContext from "./authControl/UserContext";

export function RoutesLayout() {
    const {user, setUser} = useContext(UserContext);
    const [url, setUrl] = useState("CreateAccountNow!");

    useEffect(() => {
        if(user.id > 0) {
            setUrl(user.username)
        } else {
            setUrl("CreateAccountNow")
        }
    }, [user])

    return (
        <div>
            <Header>
                <Nav.Link><Link to={'/'} className={'inheritAll'}>Starter page</Link></Nav.Link>
                <Nav.Link><Link to={'/search'} className={'inheritAll'}>Search second half</Link></Nav.Link>
                <Nav.Link><Link to={'/profile/' + url} className={'inheritAll'}>My Profile</Link></Nav.Link>
                <Nav.Link><Link to={'/shop'} className={'inheritAll'}>Buy Premium</Link></Nav.Link>
            </Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
}

export default RoutesLayout;