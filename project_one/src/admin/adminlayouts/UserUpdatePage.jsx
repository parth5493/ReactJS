import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Customhook from './../Customhook/Customhook'

const UserUpdatePage = () => {
    const { id } = useParams();
    const [apiData, setApiData] = useState();
    const {handleChange, inp, errors, updateData} = Customhook(apiData, {usernameError: ""});
    const [loading, setLoading] = useState(false)
    // console.log("id is:", id);
    useEffect(() => {
        getDataById()
    },[])

    const getDataById = async () => {
        const response = await fetch(`http://localhost:3004/user/${id}`, {
            method: 'PATCH',
        });
        const data = await response.json();
        // console.log("UserData:", data);
        updateData(data)
        setApiData(data)        
        setLoading(true)
    }

    const getUpdateData = async () => {
        const response = await fetch(`http://localhost:3004/user/${id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inp)
            });
        const data = await response.json();
        console.log("Data inside fetch API", data);
        setLoading(true)
    }
    return (
        <>
            <div className="card my-2 mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h2>Update User</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {/* {JSON.stringify(errors)} */}
                            {JSON.stringify(apiData)}
                            <p>Input Data</p>
                            {JSON.stringify(inp)}
                            <input type="text" name='username' id='username' 
                            placeholder='Enter username' className='form-control'
                            value={loading ? inp.username : "false"}
                            onBlur={handleChange} onChange={handleChange} />
                            {errors.usernameError ? <span>This field is required.</span> : <></>}&nbsp;
                            <input type="email" name='email' id='email'
                            placeholder='Enter your Email Address' className='form-control'
                            value={loading ? inp.email : "false"}
                            onBlur={handleChange} onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <input type="button" className='btn btn-primary' onClick={getUpdateData} value="Update"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserUpdatePage;