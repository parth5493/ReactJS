import React, { useEffect, useState, } from 'react';
import { Outlet, Link } from 'react-router-dom';

const APIExamplePage = () => {
    
    return (
        <>
            <div className="container">
                <h2>API Examples</h2>
                <ol>
                    <li><Link to="apiexampleone">Example One</Link></li>
                    <li><Link to="apiexampletwo">Example Two</Link></li>
                    <li><Link to="apiexamplethree">Example Three</Link></li>
                    <li><Link to="soapvsrest">SOAP VS REST</Link></li>
                </ol>                                             
            </div>
            <div className="container">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default APIExamplePage;