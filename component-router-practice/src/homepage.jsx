import React from 'react';

const Homepage = () => {
   return <>
            <section className='home_sec'>
                <div className="container">
                    <header>
                        <nav className='nav_align'>
                            <div className="row home_jsc">
                                <div className="logo">
                                    <h2>Parth</h2>
                                </div>
                                <div className="home_links">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="./menu">PRODUCT</a></li>
                                        <li><a href="#">PROMO</a></li>
                                        <li><a href="#">ABOUT</a></li>
                                        <li><a href="#">CONTACT</a></li>
                                        <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="home_text">
                        <div className="home_h1">
                            <h1>DISCOUNT 50%</h1>
                        </div>
                        <div className="home_p">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                        </div>
                        <div className="home_btn">
                            <ul>
                                <li><a href="#"><button>ORDER NOW</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="home_div_align"></div>
            </section>
          </>
};

export default Homepage;