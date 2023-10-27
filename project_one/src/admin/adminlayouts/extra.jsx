import React from 'react';
import './admindashboard.css'
import ChartCols from './ChartCols'
import AdminNavBar from './AdminNavBar'
import ComponentSideBar from './component_sidebar';

const admindashboard = () => {
    return (
        <>
            <div class="row g-0 text-center sidebar">
                <div class="col-2">
                    <div class="d-flex flex-column">
                        <div className='logo_div logo_div'>
                            <a href="#">
                                <p>PARTH</p>
                            </a>
                        </div>
                        <div className='dashboard_maindiv'>
                            <div class="p-2">
                                <div className='dashboard_div text-start'>
                                    <a href="#">
                                        <i className="fa-solid fa-gauge dashboard_logo ps-3"></i>
                                        <p className='d-inline dashboard_p ps-3'> Dashboard </p>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className='pt-4 sidebar_head'>
                                    <h5 className='font-weight-bold text-start ps-3'>THEME</h5>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='text-start pt-3'>
                                            <a href="#">
                                                <i class="fa-solid fa-droplet ps-3"></i>
                                                <p className='d-inline dashboard_p ps-4'>Colors</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='p-2'>
                                        <div className='text-start pt-3'>
                                            <a href="#">
                                                <i class="fa-solid fa-pen ps-3"></i>
                                                <p className='d-inline dashboard_p ps-4'>Typography</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className='pt-4 sidebar_head'>
                                    <h5 className='font-weight-bold text-start ps-3'>COMPONENTS</h5>
                                </div>
                                <a href="#">
                                    <i className="fa-regular fa-square"></i>       
                                    <ComponentSideBar/>                             
                                </a>
                                
                            </div>
                            <div className="p-2">Flex item 4</div>
                            <div className="p-2">Flex item 5</div>
                        </div>
                    </div>

                </div>
                <div class="col-10">                   
                    <AdminNavBar/>
                    <ChartCols />
                </div>
            </div>

        </>
    );
};

export default admindashboard;