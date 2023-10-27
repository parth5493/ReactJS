import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { retriveUsers, deleteUsers } from '../actions/users'

const Admin_users = () => {
    const dispatch = useDispatch()
    const [apiData, setApiData] = useState()
    const [loading, setLoading] = useState(false)
    const [deleteStatus, setDeleteStatus] = useState(false)

    useEffect(() => {
        getData()
    },[deleteStatus])

    const getData = async () => {
        
        const getResponse = await dispatch(retriveUsers())
        console.log("Users are", getResponse);
        
        const allUsersList =  (getResponse.payload.data).map((val, key) => {
            return <tr key={key}>
                <td>{key}</td>
                <td>{val.fullName}</td>
                <td>{val.email}</td>
                <td>{val.username}</td>
                <td>{val.password}</td>  
                <td>{val.id}</td>      
                <td>
                    <Link to={`/admin/userupdate/${val.id}`} className='btn btn-primary'><i className="fa-solid fa-pen-to-square"></i></Link>&nbsp;
                    {/* <button className='btn btn-primary'><i className="fa-solid fa-pen-to-square"></i></button> &nbsp; */}
                    <button className='btn btn-danger' data-id={val.id} onClick={deleteData}><i className="fa-solid fa-trash" data-id={val.id}></i></button>
                </td>      
            </tr>
        })
        setApiData(allUsersList)
        setLoading(true)
    }

    const deleteData = async (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.dataset);
        // console.log(event.target.dataset.id);
        const id = event.target.dataset.id
        const deleteResponse = await dispatch(deleteUsers(id))
        setDeleteStatus(true)
    }
    return (
        <>
            <div className="card my-2 mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h2 className='text-center'>All Users List</h2>
                            <div className='table-responsive'>
                                <table className='table table-striped table-hover bordered'>
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th className='td_width'>Full Name</th>
                                            <th className='td_width'>Email</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {loading ? apiData : <tr><td colSpan={6}>No Record Found</td></tr>}
                                    </tbody>                        
                                </table>
                            </div> 
                        </div>
                    </div>                    
                </div>                               
            </div>
        </>
    );
};

export default Admin_users;