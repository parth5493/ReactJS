import React from 'react';
import {useSelector} from 'react-redux'
import {selectUser} from './../reducer/users'
import { Link } from 'react-router-dom';

const AccessData = () => {
    const users = useSelector(selectUser)
    return (
        <div>
            
            <Link to="/">Home</Link>
            <p>{JSON.stringify(users.data)}</p>
        </div>
    );
};

export default AccessData;