import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './authControl/UserContext';
import TokenContext from './authControl/TokenContext';
import { Endpoint } from './Endpoint';


function Main() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    if(localStorage.getItem('token') !== null) {
      setToken(localStorage.getItem('token'));
    };
  }, [token])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Main />
);