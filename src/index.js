import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './authControl/UserContext';
import { Endpoint } from './Endpoint';


function Main() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'))
  useEffect(() => {
    if(token !== null) {
      fetch(Endpoint.checkMeRoute(), {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
        })
          .then((response) => (response.json()))
          .then((response) => {
          setUser(response);
          document.title = "Hello! " + response.username;
        }, error => {
          console.log(error)
        });
        
    } else {
      document.title = "Welcome to new World!";
    }
  }, []);


  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
