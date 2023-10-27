import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <section className='contact_sec'>
                <div className="container">
                    <div className="contact_a">
                        <ul>
                            <li><a href="./inquery">CONTACT US</a></li>
                        </ul>
                        <Outlet></Outlet>
                    </div>
                    <div className="contact_social">
                        <ul>
                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div className="contact_phone">
                        <ul>
                            <li><a href="#">647-539-3853</a></li>
                        </ul>
                    </div>
                </div>
               
            </section>
        </>
    );
};

export default Contact;