import React from 'react';
import Image1 from './images/help_image.jpg'
import { Link } from 'react-router-dom';

const First_subsection = () => {
    return (
        <>
            <section>
                <div className='d-flex justify-content-center py-5'>
                    <div className="col-7">
                        <p className='d-inline first_subsection_fontone'>Store.</p>
                        <p className='d-inline first_subsection_fontsecond'>The best way to buy the products you love.</p>
                    </div>
                    <div className="col-3">
                        <div className="d-flex">
                            <div className="col-2">
                                <div className="help_image">
                                    <img src={Image1} alt="" className='help_image' />
                                </div>
                            </div>
                            <div className="col">
                                <div className='help_font'>
                                    Need Shopping help?
                                </div>
                                <div>
                                    <Link>Ask a Specialist</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex pt-3">
                            <div className="col-2">
                                <div className="apple_store">
                                    <i class="fa-brands fa-app-store ps-1"></i>
                                </div>
                            </div>
                            <div className="col">
                                <div className='help_font'>
                                    Visit a Apple Store
                                </div>
                                <div>
                                    <Link>Find one near you <i className="fa-solid fa-greater-than first_font"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default First_subsection;