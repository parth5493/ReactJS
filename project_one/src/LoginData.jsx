import React from 'react';

const LoginData = () => {
    fetch('http://localhost:3004/user')
    .then(res => res.json())
    .then((data) => {console.log(data);
    })        
    return (
        <>
            
        </>
    );
};

export default LoginData;