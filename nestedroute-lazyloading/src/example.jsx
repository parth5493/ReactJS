import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Example = () => {
    return (
        
        <div>
            <div className="container">
                <div>
                    <h1 className='text-center'>Class and Functional Component</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">                        
                            <h3><Link to="classcompo">Class Component</Link></h3>                       
                    </div>
                    <div className="col-lg-6">
                        <h3><Link to="classcompo">Functional Component</Link></h3>  
                    </div>
                </div>
            </div>
            
            <Outlet></Outlet>
        </div>
        
    );
};

export default Example;