import React from 'react';

const homepage = () => {
    return <>
             <section className='home_bg'> 
                <div className="container">
                    <header>
                        <nav className='nav_align'>
                            <div className="row row_jsc">
                                <div className="home_links">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">ABOUT US</a></li>
                                        <li><a href="#">LEVELS</a></li>
                                    </ul>
                                </div>
                                <div className="searchbar">
                                    <input type="text" placeholder='Search'/>
                                </div>
                            </div>                            
                        </nav>
                    </header>
                    <div className="home_text">
                       <div className="h2">
                            <h2>SWIMMING</h2>
                       </div>
                       <div className="h2_2">
                            <h2>LESSONS</h2>
                       </div>
                       <div className="p">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Deserunt cupiditate voluptate vero placeat quos amet laborum consequuntur, 
                                dignissimos praesentium voluptatibus, facere ipsa eaque possimus eos tempora aliquam, officia beatae. Repellendus!</p>
                       </div>
                    </div>
                    <div className="row jsc_btn">
                        <div className="btn1">
                            <ul>
                                <li><a href="#"><button>JOIN US</button></a></li>
                            </ul>
                        </div>
                        <div className="btn2">
                            <ul>
                                <li><a href="#"><button>READ MORE</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
             </section>
           </>
};

export default homepage;