import React, {useState, useEffect} from 'react';
import './UpdateDetails.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UpdateDetails () {

  const [dID, setdID] = useState('');
  const [contactNumber, setContactNumber] = useState('');

useEffect(
    () => {
      setdID(localStorage.getItem('id'));
      setContactNumber(localStorage.getItem('contactNumber'))
    },
    []
  )

  const callMockAPI = () =>{
    console.log(dID + " " + contactNumber);

    const formData = {
      dID,
      contactNumber
    }

    const endpointURL = `https://6151d1894a5f22001701d469.mockapi.io/api/v1/users/${dID}`;
    axios.put(endpointURL, formData)
          .then(response => console.log(response.data))
          .catch(err => console.log());
  }

  return(
    <Form>
    <Form.Group className="mb-3" controlId="id" >
      <Form.Label>Driver ID: </Form.Label>
      <Form.Control onChange={e=>setdID(e.target.value)} type="number" placeholder="Driver ID" aria-label="driver ID" aria-describedby="basic-addon1" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="contactNumber" >
      <Form.Label>New Contact Number: </Form.Label>
      <Form.Control onChange={e=>setContactNumber(e.target.value)} type="number" placeholder="contact number" aria-label="contact number" aria-describedby="basic-addon1" />
    </Form.Group>

    <Link to="/updatedetails">
      <Button type="submit" onClick={callMockAPI}>Submit</Button>
    </Link>

  </Form>
);

}
export default UpdateDetails;
