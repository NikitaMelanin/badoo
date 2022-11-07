import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Loader from "../home/components/news/Component/Loader";
import Error from "../home/components/news/Component/Error";



export function Profile() {
    const [user, setUser] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (res) => {
                    setUser(res);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                }
            );
    },[]);

    return (
        <div>
            {!isLoaded &&
                <Loader />
            }
            {!error &&
                <Error message={JSON.stringify(error)} />
            }
            {user &&
                <pre>
                    {JSON.stringify(user)}
                </pre>
            }
        </div>
    );
}

export default Profile;