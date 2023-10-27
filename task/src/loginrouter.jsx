import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginLayout from './login'

class ComponentMethodsRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                <Route path="/" element={<LoginLayout/>}>
                    {/* <Route path="admindashbooard" element={<AdminDashBoard/>} />  
                    <Route path="userspage" element={<UsersListPage/>} />   
                    <Route path="userupdate/:id" element={<UserUpdatePage/>} />      */}
                </Route>                
                </Routes>             
            </>
        );
    }
}

export default ComponentMethodsRoute;