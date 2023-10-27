import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './admin_layout.css'

const sidebar = (isOpen) => {
    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : ''} `}>
                <div className="sidebar_logo">
                    <h6 className='text-center p-4 admin_logo'>Admin</h6>
                </div>
                <div className='row flex-column'>
                        {/* <Link className='sidebar_links text-center' to='admindashbooard'>Dashboard</Link>
                        <Link className='sidebar_links text-center' to='userspage'>Users</Link> */}
                </div>
                <Outlet></Outlet>
            </aside>    
            
        </>
    );
};

export default sidebar;