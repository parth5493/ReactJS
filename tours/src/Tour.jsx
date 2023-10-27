import React from 'react';
import TourLayout from './TourLayout'

const Tour = ({id, image, info, name, price}) => {
    return (
        <>
           
                        <TourLayout img={image} title={name} info={info} price={price}/>
                             
               
        </>
    );
};

export default Tour;