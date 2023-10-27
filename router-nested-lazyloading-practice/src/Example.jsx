import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Example = () => {
    return (
        <div>
            Example
            <Link to="classcompo">Class Component</Link>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Example;