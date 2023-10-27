import React, { useEffect, useState } from 'react';

const APIExamplePage = () => {
    const [data, setData] = useState()
    const [loaing, setLoading] = useState(false)    

    useEffect( ()=> {
            fetch('https://jayramin.000webhostapp.com/allusers')
           .then(res => res.json())
           .then((results) => {console.log(results);   
        
        setLoading(true)
        let apiData = Object.entries(results.Data).map(([key, val], index) => {
            console.log("Key is:", key);
            console.log(("value is:", val));
            //console.log(index);
            console.log(val.username);
            return <li key={key}>
                Name: {val.username} Email: {val.email}</li>
        })
        setData(apiData)
    }) 
    },[])

    return (
        <>
            <div className="container">                
                {loaing ? <ol> {data} </ol> : <>Loading...</>}              
                {/*{JSON.stringify(data)}  For Printing*/}                   
            </div>
        </>
    );
};

export default APIExamplePage;