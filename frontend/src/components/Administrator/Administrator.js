import React, {useState} from 'react';
import {useHistory} from "react-router";
import './Administrator.css';
import axios from 'axios';
import { Button, Form, Row, Col, Container, Alert } from 'react-bootstrap';



function Administrator(){
    
    const [driverID, setDriverID] =  useState('');
    const [driverIDPhone, setPhoneID] =  useState('');
    //const [driverData, setDriverData] = useState([]);
    let history = useHistory();
    const [ID,setID] = useState('');
    const [tableData,setTableData] = useState([]);
    const [show, setShow] = useState(false);
    
    const [contactNumber,setContactNumber] = useState('');

    


    function putUserPhone(e){
        e.preventDefault();
        console.log(driverIDPhone);
        console.log(contactNumber);
      
        const formData = {
          contactNumber,
        };
        const endpointURL = `http://localhost:8080/drivers/?id=${driverIDPhone}&contactNumber=${contactNumber}`;
    
        if(contactNumber.length === 11){
          axios.put(endpointURL, formData)
            .then((response)=>{console.log(response)})
            .catch((err)=>{console.log(err)});
            window.alert(`Contact Number for Driver ${driverIDPhone} Successfully Changed.`);
        }else{
          window.alert("Phone number must be 11 digits");
        }
      }


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
        <Form>
            <Col sm={5}>
      <Form.Group className="mb-3" controlId="formUserID">
        <Form.Label>Driver ID:</Form.Label>
        <Form.Control type="text" placeholder="Driver ID" onChange={e=>setPhoneID(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUserID">
        <Form.Label>Phone Number: </Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={e=>setContactNumber(e.target.value)}/>
      </Form.Group>
      </Col>
      <Button variant="primary" type="submit" onClick={putUserPhone}>
        Update
      </Button>
      </Form>
      </fieldset></section>
      
        </Col></Row></div>
        
    </Row>
  
</Container>
</section>
</main>
)
;
}


export default Administrator;
