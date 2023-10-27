import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import AdminLayout from './admin/adminlayout'
import AdminDashBoard from './admin/admin_dashboard'
import UsersListPage from './admin/admin_users'
import UserUpdatePage from './admin/userupdatepage'

class ComponentMethodsRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                <Route path="/" element={<AdminLayout/>}>
                    <Route path="admindashbooard" element={<AdminDashBoard/>} />  
                    <Route path="userspage" element={<UsersListPage/>} />   
                    <Route path="userupdate/:id" element={<UserUpdatePage/>} />     
                </Route>                
                </Routes>             
            </>
        );
    }
}

export default ComponentMethodsRoute;