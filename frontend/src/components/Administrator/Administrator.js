import React, {useState} from 'react';
import {useHistory} from "react-router";
import './Administrator.css';
import axios from 'axios';
import {Button, Form, Row, Col, Container, Alert} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import SERVER_URL from '../../utils/constans';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";


function Administrator() {

    const [driverID, setDriverID] = useState('');
    let history = useHistory();
    const [ID, setID] = useState('');
    const [tableData, setTableData] = useState([]);
    const [show, setShow] = useState(false);

    const {
        formState,
        register,
        handleSubmit,
    } = useForm();

    const onSubmitNumber = (data, e) => {
        console.log("Submit event", e);
        console.log(data);
        const endpointURL = `${SERVER_URL}/drivers/?id=${data.id}&contactNumber=${data.contactNumber}`;
        axios.put(endpointURL, data)
            .then((response) => {
                console.log(response)
                if (response.status >= 200 && response.status < 300){
                    toast.success(`Contact Number for Driver ${data.id} Successfully Changed to ${data.contactNumber}`,{
                        onClose: () => window.location.reload(false),
                    })
                }
            })
            .catch((error) => {
                    if(error.response.status === 404){
                        toast.error(`Sorry, Driver ID ${data.id} does not exist.`)
                    } else {
                    console.log("Error", error.message);
                }
                toast.error("Oops, something went wrong!")
                console.log(error.config);
            });
    };

    function getUserDelete(e) {
        e.preventDefault();
        console.log(ID);
        const endpointURL = `${SERVER_URL}/drivers/id?id=${ID}`;
        axios.get(endpointURL)
            .then((response) => {
                console.log(response.data);
                if (response.data == null){
                    toast.error(`Error! Driver ${ID} Does Not Exist`,{
                        onClose: () => window.location.reload(false),
                    })
                }else{
                    setShow(true);
                    setTableData(response.data);
                }
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
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button style={{marginRight: 10, backgroundColor: 'red'}} onClick={() => {
                            setShow(false);
                            deleteUser();
                        }}>Confirm</Button>

                        <Button onClick={() => {
                            setShow(false);
                        }}>Cancel</Button>
                    </div>
                </Alert>
            );
        }
        return null;
    }

    function deleteUser() {
        if (tableData) {
            const endpointURL = `${SERVER_URL}/drivers/id?id=${ID}`;
            axios.delete(endpointURL)

                .then((response) => {
                    console.log(response)

                    if (response.status >= 200 && response.status < 300){
                        toast.success(`Driver ${ID} Successfully Deleted`,{
                            onClose: () => window.location.reload(false),
                        })
                    }
                })
                .catch((error) => {
                    if(error.response.status === 404){
                        toast.error(`Sorry, Driver ID ${ID} does not exist.`)
                    } else {
                        console.log("Error", error.message);
                    }
                    toast.error("Oops, something went wrong!")
                    console.log(error.config);
                });
        }
    }


    return (
        <main className="page admin-page">
            <section className="admin-page dark">
                <Container>
                    <div className="block-heading">
                        <h2>Admin Panel</h2>
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
                                                    <Form.Group className="mb-3" controlId="driverID">
                                                        <Form.Label>Driver ID: </Form.Label>
                                                        <Form.Control type="number"
                                                                      onChange={e => setDriverID(e.target.value)}
                                                                      placeholder="Driver ID" aria-label="driver ID"
                                                                      aria-describedby="basic-addon1"/>
                                                    </Form.Group>
                                                </Col>
                                                <Button type="submit" onClick={() => {
                                                    history.push(`../readdriver/${driverID}`)

                                                }}>Search</Button>
                                                <Link to="../readalldrivers">
                                                    <Button type="submit">View All</Button>
                                                </Link>
                                            </Form>
                                        </fieldset>
                                    </section>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <section className="admin-panel-layout">
                                        <fieldset>
                                            <h3 className="section-heading">Delete Driver</h3>
                                            <Form>
                                                <Col sm={5}>
                                                    <Form.Group className="mb-3" controlId="formUserID">
                                                        <Form.Label>Driver ID:</Form.Label>
                                                        <Form.Control type="text" placeholder="Driver ID"
                                                                      onChange={e => setID(e.target.value)}/>
                                                    </Form.Group>
                                                </Col>
                                                <Button variant="primary" type="submit" onClick={getUserDelete}>
                                                    Delete
                                                </Button>
                                            </Form>
                                        </fieldset>
                                    </section>
                                    <AlertDismissibleExample/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <section className="admin-panel-layout">
                                        <fieldset>
                                            <h3 className="section-heading">Update Driver Contact Number</h3>
                                            <Form onSubmit={handleSubmit(onSubmitNumber)}>
                                                <Col sm={5}>
                                                    <Form.Group className="mb-3" controlId="phoneDriverID">
                                                        <Form.Label>Driver ID:</Form.Label>
                                                        <Form.Control type="number"
                                                                      placeholder="Driver ID"
                                                                      {...register('id', {
                                                                          required: '*Required',
                                                                          pattern: {
                                                                              value: /^[0-9]*$/,
                                                                              message: 'Please only enter numeric values',
                                                                          },
                                                                      })}/>
                                                        <div className="invalidInput">
                                                            <p>{formState.errors.id && formState.errors.id.message}</p>
                                                        </div>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="newDriverNum">
                                                        <Form.Label>Phone Number: </Form.Label>
                                                        <Form.Control type="number"
                                                                      placeholder="Phone Number" {...register('contactNumber', {
                                                            required: '*Required',
                                                            pattern: {
                                                                value: /^\d{11}$/,
                                                                message: 'Please enter a valid phone number of 11 digits',
                                                            },
                                                        })}/>
                                                        <div className="invalidInput">
                                                            <p>{formState.errors.contactNumber && formState.errors.contactNumber.message}</p>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Button variant="primary" type="submit">
                                                    Update
                                                </Button>
                                            </Form>
                                        </fieldset>
                                    </section>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </main>
    )
        ;
}


export default Administrator;
