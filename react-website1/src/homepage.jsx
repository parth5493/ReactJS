import React from 'react';

const Homepage = () => {
    return (
        <>
            <section className='home_sec'>
                <div className="container">
                    <header>
                        <nav className='nav_align'>
                            <div className="row nav1_jsc">
                                <div className="col-10">
                                    <div className="logo">
                                        <h2>KRIVA RESTAURANT</h2>
                                    </div>
                                </div>
                                <div className="col-90">
                                    <div className="nav2">
                                        <div className="row nav2_jsc">
                                            <div className="col-80">
                                                <div className="home_links">
                                                    <ul>
                                                        <li><a href="#">Home</a></li>
                                                        <li><a href="/about">About</a></li>
                                                        <li><a href="/menu">Menu</a></li>
                                                        <li><a href="/contact">Contact</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-20">
                                                <div className="home_social">
                                                    <ul>
                                                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                                        <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                                        <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="home_sec2">
                    <div className="home_sec2_align"></div>
                    <div className="home_sec2_align"></div>
                    <div className="home_sec2_align"></div>
                </div>
            </section>
        </>
    );
};

export default Homepage;