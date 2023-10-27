import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <div className="col-lg-4 mt-2">

    <MDBCard>
      <MDBCardImage className='' src={props.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.info}
        </MDBCardText>
        <MDBCardText>
          ${props.price}
        </MDBCardText>
        <button>not interested</button>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}