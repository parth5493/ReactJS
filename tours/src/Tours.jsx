import React from 'react';
import Tour from './Tour'

const Tours = ({users}) => {
    return (
        <>
            <div className="container">
                <h2>Our tours</h2>
            </div>
            <div>
            <div className="container">
                <div className="row">
                    
                {users.map((tour) => {
                    return <Tour key={tour.id} {...tour} />
                })}
                 </div>
            </div>
            </div>
        </>
    );
};

export default Tours;