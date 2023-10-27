import React from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tours from './Tours'

const url = "https://course-api.com/react-tours-project"

const FetchData = () => {
    const [users, setUsers] = useState([])

    const FetchUserData = () => {
        fetch(url).then((res)=>res.json()).then((UserData)=>{
            setUsers(UserData)
           
        })
    }
    useEffect(()=>{
        FetchUserData()
        console.log(FetchUserData);
    },[])  
    return (
        <>
            <Tours users={users}/>
        </>
    );
};

export default FetchData;