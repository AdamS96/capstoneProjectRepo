import React, {useState} from 'react';
import {useHistory} from "react-router";
import './Administrator.css';
import axios from 'axios';
import { Button, Form, Row, Col, Container, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function Administrator(){
    
    const [driverID, setDriverID] =  useState('');
    const [driverIDPhone, setPhoneID] =  useState('');
    //const [driverData, setDriverData] = useState([]);
    let history = useHistory();
    const [ID,setID] = useState('');
    const [tableData,setTableData] = useState([]);
    const [show, setShow] = useState(false);
    
    const [contactNumber,setContactNumber] = useState('');


    const {
        formState,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data, e) => {
        console.log("Submit event", e);
        console.log(data);

        const endpointURL = `http://localhost:8080/drivers/?id=${data.id}&contactNumber=${data.contactNumber}`;
        axios.put(endpointURL, data)
            .then(response => console.log(response.data))
            .catch(err => console.log());
        //setTimeout(() => window.location.reload(), 1000);
        window.alert(`Contact Number for Driver ${data.id} Successfully Changed to ${data.contactNumber}`);
        window.location.reload(false);

    };





    function getUserDelete(e){
        e.preventDefault();
        console.log(ID);
        setShow(true);
    
        const endpointURL = `http://localhost:8080/drivers/id?id=${ID}`;
    
        axios.get(endpointURL)
          .then((response)=>{
            console.log(response.data);
            setTableData(response.data);
          })
        }

        function AlertDismissibleExample() {
  
            if (show) {
              return (
                
                <Alert show={show} variant="danger">
                <Alert.Heading>Caution</Alert.Heading>
                <p>
                  You are about to delete driver <b>{ID}</b>
                </p>
                <hr />
                
                <div className="d-flex justify-content-end">
                  <Button style={{marginRight: 10, backgroundColor: 'red'}} onClick={() => {setShow(false);
                                          deleteUser();}} 
                                          >
                    Confirm
                  </Button>
                  <Button onClick={() => {setShow(false);
                                          }} 
                                          >
                    Cancel
                  </Button>
                </div>
              </Alert>
              );
            }
            return null;
          }

        function deleteUser(){
            if(tableData){
              const endpointURL = `http://localhost:8080/drivers/id?id=${ID}`;
        
              axios.delete(endpointURL)
              .then(()=>{window.alert(`Driver ${ID} Successfully Deleted`)})
              .catch((err)=>{console.log(err)});
            }
          }



return(
<main className="page admin-page">
    <section className="admin-page dark">
<Container>
<div className="block-heading">
          <h2>Admin Panel</h2>
          <p></p>
        </div>
    <Row>
        

            <div className="admin-panel">
                <Row>
        <Col xs={12}>
          
            <section className="admin-panel-layout">
                <fieldset>
                <h3 className="section-heading">Search Driver Details</h3>
        <Form>
        <Col sm={5}>    
        <Form.Group className="mb-3" controlId="driverID" >
          <Form.Label>Driver ID: </Form.Label>
          <Form.Control type="number" onChange={e => setDriverID(e.target.value)} placeholder="Driver ID" aria-label="driver ID" aria-describedby="basic-addon1" />
        </Form.Group>
        </Col>
          <Button type="submit" onClick={() => {history.push(`../readdriver/${driverID}`)}}>Search</Button>
        

      </Form></fieldset></section></Col></Row>
        
   
        <Row>
        <Col xs={12}>  
        <section className="admin-panel-layout">
                <fieldset>
                <h3 className="section-heading">Delete Driver</h3>
        
           <Form>
               <Col sm={5}>
          <Form.Group className="mb-3" controlId="formUserID">
        <Form.Label>Driver ID:</Form.Label>
        <Form.Control type="text" placeholder="Driver ID" onChange={e=>setID(e.target.value)}/>
      </Form.Group>
      </Col>
      <Button variant="primary" type="submit" onClick={getUserDelete}>
        Delete
      </Button>
      </Form>
      </fieldset></section>
      <AlertDismissibleExample /></Col></Row>
        
  



                <Row>
                    <Col xs={12}>
                        <section className="admin-panel-layout">
                            <fieldset>
                                <h3 className="section-heading">Update Driver Contact Number</h3>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Col sm={5}>
                                        <Form.Group className="mb-3" controlId="phoneDriverID">
                                            <Form.Label>Driver ID:</Form.Label>
                                            <Form.Control type="text" placeholder="Driver ID" {...register('id')}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="newDriverNum">
                                            <Form.Label>Phone Number: </Form.Label>
                                            <Form.Control type="number" placeholder="Phone Number" {...register('contactNumber', {
                                                required: '*Required',
                                                pattern: {
                                                    value: /^\d{11}$/,
                                                    message: 'Please enter a valid phone number of 11 digits',
                                                },
                                            })}/>
                                            <div className="invalidInput"><p>{formState.errors.contactNumber && formState.errors.contactNumber.message}</p></div>
                                        </Form.Group>
                                    </Col>
                                    <Button variant="primary" type="submit">
                                        Update
                                    </Button>
                                </Form>
                            </fieldset></section>

                    </Col></Row>

            </div>
        
    </Row>
  
</Container>
</section>
</main>
)
;
}


export default Administrator;
