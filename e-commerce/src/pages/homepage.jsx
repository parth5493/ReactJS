import React from 'react';
import NavBar from './navbar'
import FirstSlider from './first_slider' 
import FirstSubSection from './first_subsection'
import SecondSlider from './second_silder/second_slider'

const homepage = () => {
    return (
        <>
            <NavBar/>
            <FirstSlider/>
            <section className='section_body'>
                <div>
                    <FirstSubSection/>
                </div>
                <div>
                    <SecondSlider/>
                </div>
            </section>
        </>
    );
};

export default homepage;