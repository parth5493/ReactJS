import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const classcompomenu = () => {
    return (
       <>
           <div className="container">
                <div className="row">
                    <ol>
                        <li><Link to="classintro">Class Component</Link></li>
                    </ol>
                    <Outlet></Outlet>
                </div>
               
           </div>
       </>
    );
};

export default classcompomenu;