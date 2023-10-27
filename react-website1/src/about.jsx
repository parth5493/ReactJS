import React from 'react';

const About = () => {
    return (
       <>
            <section className='about_sec'>
                <div className="container">
                    <div className="about_sec1">
                        <div className="about_h2">
                            <h2>ABOUT US</h2>
                        </div>
                        <div className="about_p">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. 
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>
                    <div className="about_sec2">
                        <div className="row about_sec2_jsc">
                            <div className="col-30">
                                <div className="about_sec2_img">
                                    <h2>Kriva Patel</h2>
                                </div>
                            </div>
                            <div className="col-50">
                                <div className="about_sec2_h2">
                                    <h2>Who is Our Chef?</h2>
                                </div>
                                <div className="about_sec2_p">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. 
                                        Quios ipsums suspendisse ultricees gravida. Risus commodo viverra maecenas accumsan lacus velfacilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    );
};

export default About;