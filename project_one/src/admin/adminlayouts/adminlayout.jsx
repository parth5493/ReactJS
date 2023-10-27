import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './navbar'
// import SideBar from './adminlayouts/sidebar'
import './admin_layout.css'

const Adminlayout = () => {
    const [istogglesidebar, setIstoggleSidebar] = useState(false);

    const togglesidebar = () => {
        setIstoggleSidebar(!istogglesidebar)
        console.log("Sidebar Click", istogglesidebar);
    }
    return (
        <>
            <aside id='sidebar' className={istogglesidebar ? "sidebaractive" : ""}>
                <h1 className='border-bottom'>Admin</h1>
                <div  className='sidemenu mt-3'>
                    <ul>
                        <li><Link className='sidebar_links text-center' to='admindashbooard'>Dashboard</Link></li>
                        <li><Link className='sidebar_links text-center' to='userspage'>Users</Link></li>
                    </ul>
                    
                    
                </div>
            </aside>
            <main id="main" className={istogglesidebar ? "mainactive" : ""}>
                <header className='header'>
                    <div className="flex  align-items-center">
                        <div className="col">
                            <Navbar togglesidebar={togglesidebar} togglebutton={istogglesidebar}/>
                        </div>
                    </div>
                </header>
                <section className='px-2 pt-3'>
                    <Outlet></Outlet>
                </section>
            </main>            
                      
           
           
        </>
    );
};

export default Adminlayout;