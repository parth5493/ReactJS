import React from 'react';

const footer = () => {
    return <>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
              integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
              crossorigin="anonymous" referrerpolicy="no-referrer" />

              <section className='footer'>
                    <footer>
                        <div className="row footer_jsc">
                            <div className="col-33">
                                <div className="icon">
                                    <p>Phone</p>
                                </div>
                                <div className="tel_number">
                                    <p>647-539-3853</p>
                                </div>
                            </div>
                            <div className="col-33">
                                <div className="icon">
                                    <p>Email</p>
                                </div>
                                <div className="tel_number">
                                    <p>parthpatel5483@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-33">
                                <div className="icon">
                                    <p>Address</p>
                                </div>
                                <div className="tel_number">
                                    <p>30 Bassett Cres, Brampton</p>
                                </div>
                            </div>
                        </div>
                    </footer>
              </section>  
           </>
};

export default footer;