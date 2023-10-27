import React from 'react';
import Image from './image/soap-vs-rest.jfif'
import ImageTwo from './image/api-list.PNG'

const SOAPvsREST = () => {
    return (
        <>
            <div className="container">
                <h2 className='text-center'>SOAP VS REST API</h2>
                <img className='rounded mx-auto d-block' src={Image} alt="" />
                <p>What is XML file and used for?</p>
                <p>An Extensible Markup Language (XML) file is a text-based document that you can save with the . xml extension. 
                    You can write XML similar to other text files.XML's primary function is to create formats for data 
                    that is used to encode information for documentation, database records, transactions and many other types of data.</p>
                <p>It supports only GET and POST API methods.</p>
                <p>What is HTTP and used for?</p>
                <p>Thus, Hypertext Transfer Protocol is the system of rules which allows data to be transferred using the World Wide Web, 
                    where Uniform Resource Locators or URLs (for example, https://www.google.com) can be linked together by hypertext.</p>
                <p>It supports GET, POST, PUT, PATCH and DELETE methods.</p>
                <img className='rounded mx-auto d-block' src={ImageTwo} alt="" />
            </div>
        </>
    );
};

export default SOAPvsREST;