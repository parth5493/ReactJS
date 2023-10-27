import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Outlet, Link } from 'react-router-dom';


const Login = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
        <div className="d-flex justify-content-start">
            <div className="col-3">
                <Link to="/"><i className="fa-solid fa-house black"></i></Link>
            </div>
        </div>
            <h2 className='text-center pt-4'>Photo Gallery</h2>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (

                <div className="d-flex justify-content-center flex-wrap col-gap">

                    {photos.map((item) => (
                        <div  key={item.id} className="col-2 pt-3">
                            <MDBCard>
                                <MDBCardImage src={item.url} position='top' alt='...' className='img-fluid rounded' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    ))}

                </div>

            )}
             <section className='px-2 pt-3'>
                    <Outlet></Outlet>
                </section>
        </>
    );
};

export default Login;


