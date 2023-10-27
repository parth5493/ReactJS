import React from 'react';
import './admindashboard.css'
import UserCharts from './admincharts/userscharts'
// import UserCharts from './ChartCols'

const admindashboard = () => {
    return (
        <>
            <div class="row g-0 text-center sidebar">                                 
                <div class="col users_col rounded">
                    <div class="p-3">
                        <div className="row charts_align align-items-start">
                            <div className='col users_chart_semibold text-start'>
                                <strong>26K</strong>
                                <span className='text-start users_chart_normal p-2'>(-12.4% <i class="fa-solid fa-arrow-down p-1"></i>)</span>
                                <p className='users_chart_normal'>Users</p>
                            </div>
                            <div className='col'>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <UserCharts />
                    </div>
                </div>
                <div class="col income_col rounded">
                    <div class="p-3">
                        <div className="row charts_align align-items-start">
                            <div className='col users_chart_semibold text-start'>
                                <strong>$6,200</strong>
                                <span className='text-start users_chart_normal p-1'>(40.9% <i class="fa-solid fa-arrow-up"></i>)</span>
                                <p className='users_chart_normal'>Income</p>
                            </div>
                            <div className='col'>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <UserCharts />
                    </div>
                </div>
                <div class="col conversion_col rounded">
                    <div class="p-3">
                        <div className="row charts_align align-items-start">
                            <div className='col users_chart_semibold text-start'>
                                <strong>2.49</strong>
                                <span className='text-start users_chart_normal p-2'>(84.7% <i class="fa-solid fa-arrow-up"></i>)</span>
                                <p className='users_chart_normal'>Conversion Rate</p>
                            </div>
                            <div className='col'>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <UserCharts />
                    </div>
                </div>
                <div class="col sessions_col rounded">
                    <div class="p-3">
                        <div className="row charts_align align-items-start">
                            <div className='col users_chart_semibold text-start'>
                                <strong>44K</strong>
                                <span className='text-start users_chart_normal p-2'>(-23.6% <i class="fa-solid fa-arrow-down p-1"></i>)</span>
                                <p className='users_chart_normal'>Sessions</p>
                            </div>
                            <div className='col'>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <UserCharts />
                    </div>
                </div>
            </div>

        </>
    );
};

export default admindashboard;