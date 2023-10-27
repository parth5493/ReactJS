import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Tasktwo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('http://localhost:3001/adminActivity')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);
    // console.log(data);
    if (data.length === 0) {
        return (
            <div className='text-center pt-4'>
                Loading...
            </div>
        );
    }

    console.log(data[0].detailedMsg.publicIp[0].ip);
    // console.log(data[1]);

    return (
        <>
            <h2 className='text-center py-4 fw-bold'>Task Two</h2>
            <MDBTable bordered borderColor="primary">
                <MDBTableHead>
                    <tr>
                        <th scope='col' className="fw-bold">Sr No.</th>
                        <th scope='col' className="fw-bold">Name</th>
                        <th scope='col' className="fw-bold">Email</th>
                        <th scope='col' className="fw-bold">Time</th>
                        <th scope='col' className="fw-bold">Message</th>
                        <th scope='col' className="fw-bold">IP1</th>
                        <th scope='col' className="fw-bold">Tag1</th>
                        <th scope='col' className="fw-bold">IP2</th>
                        <th scope='col' className="fw-bold">Tag2</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th scope='row' className="fw-bold">1</th>
                        <td className="fw-bold">{data[0].detailedMsg.name}</td>
                        <td className="fw-bold">{data[0].detailedMsg.email}</td>
                        <td className="fw-bold">{data[0].time}</td>
                        <td className="fw-bold">{data[0].msg}</td>
                        <td className="fw-bold">{data[0].detailedMsg.publicIp[0].ip}</td>
                        <td className="fw-bold">{data[0].detailedMsg.publicIp[0].tag}</td>
                        <td className="fw-bold">N/A</td>
                        <td className="fw-bold">N/A</td>
                    </tr>
                    <tr>
                        <th scope='row' className="fw-bold">1</th>
                        <td className="fw-bold">{data[1].detailedMsg.name}</td>
                        <td className="fw-bold">{data[1].detailedMsg.email}</td>
                        <td className="fw-bold">{data[1].time}</td>
                        <td className="fw-bold">{data[1].msg}</td>
                        <td className="fw-bold">{data[1].detailedMsg.publicIp[0].ip}</td>
                        <td className="fw-bold">{data[1].detailedMsg.publicIp[0].tag}</td>
                        <td className="fw-bold">{data[1].detailedMsg.publicIp[1].ip}</td>
                        <td className="fw-bold">{data[1].detailedMsg.publicIp[1].tag}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>            
        </>
    );
};

export default Tasktwo;