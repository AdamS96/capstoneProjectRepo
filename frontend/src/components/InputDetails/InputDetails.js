import React from 'react';
import './InputDetails.css';
import axios from 'axios';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function InputDetails() {

    const {
        formState,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data, e) => {
        console.log("Submit event", e);
        console.log(data);
        const endpointURL = "http://localhost:8080/drivers";
        axios.post(endpointURL, data)
            .then(response => console.log(response.data))
            .catch(err => console.log());
            //setTimeout(() => window.location.reload(), 1000);
            window.alert(`Success!`);
            window.location.reload(false);
    };

    // const usedOutsideState = watch("usedOutsideState");
    // const usedCommercialPurposes = watch("usedCommercialPurposes");



    return (
        <main className="page insurance-page">
            <section className="insurance-form backdrop">
                <Container>
                    <div className="block-heading">
                        <h2>Car Insurance Quote</h2>
                        <p>Fill out this form to get a new qoute on your car insurance</p>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-details">
                            <h3 className="section-heading">Personal Details</h3>

                            <Row className="g-3">

                                <Col sm={1}>
                                    <Form.Group className="mb-3" controlId="prefix">

                                        <Form.Label>Prefix</Form.Label>
                                        <Form.Control type="text" placeholder="Mr" aria-label="prefix" aria-describedby="basic-addon1" {...register('prefix', {
                                            required: '*Required',
                                            maxLength: {
                                                message: 'Prefix cannot be over 10 characters long',
                                                value: 10,
                                            },
                                            pattern: {
                                                value: /^[A-Za-z-]+$/i,
                                                message: 'Illegal character input'
                                            },
                                        })} />
                                        <div className="invalidInput"><p>{formState.errors.prefix && formState.errors.prefix.message}</p></div>
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your first name" aria-label="first name" aria-describedby="basic-addon1"
                                            {...register('firstName', {
                                                required: '*Required',
                                                maxLength: {
                                                    message: 'First name cannot be over 100 characters',
                                                    value: 100,
                                                },
                                                pattern: {
                                                    value: /^[A-Za-z-]+$/i,
                                                    message: 'Illegal character input'
                                                },
                                            })} />
                                        <div className="invalidInput"><p>{formState.errors.firstName && formState.errors.firstName.message}</p></div>
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your surname" aria-label="Last name" aria-describedby="basic-addon1"
                                            {...register('lastName', {
                                                required: '*Required',
                                                maxLength: {
                                                    message: 'Last name cannot be over 100 characters',
                                                    value: 100,

                                                },
                                                pattern: {
                                                    value: /^[A-Za-z-]+$/i,
                                                    message: 'Illegal character input'
                                                },
                                            })} />
                                        <div className="invalidInput"><p>{formState.errors.lastName && formState.errors.lastName.message}</p></div>
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="contactNumber">
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="number" placeholder="Please enter your phone number" aria-label="phone number" aria-describedby="basic-addon1"
                                            {...register('contactNumber', {
                                                required: '*Required',
                                                pattern: {
                                                    value: /^\d{11}$/,
                                                    message: 'Please enter a valid phone number of 11 digits',
                                                },
                                            })} />
                                        <div className="invalidInput"><p>{formState.errors.contactNumber && formState.errors.contactNumber.message}</p></div>
                                    </Form.Group>
                                </Col>

                                <Col sm={10}>
                                    <Form.Group className="mb-3" controlId="addressLine1">
                                        <Form.Label>Address line 1</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your street address" aria-label="Address line 1" aria-describedby="basic-addon1"
                                            {...register('addressLine1', {
                                                required: '*Required',
                                                maxLength: {
                                                    message: 'Please enter less than 250 characters',
                                                    value: 250,

                                                },
                                                
                                            })} />
                                        <div className="invalidInput"><p>{formState.errors.addressLine1 && formState.errors.addressLine1.message}</p></div>
                                    </Form.Group>
                                </Col>

                                <Col sm={10}>
                                    <Form.Group className="mb-3" controlId="addressLine2">
                                        <Form.Label>Address line 2</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your street address" aria-label="Address line 2" aria-describedby="basic-addon1"
                                            {...register('addressLine2', {
                                                maxLength: {
                                                    message: 'Please enter less than 250 characters',
                                                    value: 250,

                                                },

                                            })} />
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your city" aria-label="City" aria-describedby="basic-addon1"
                                            {...register('city', {
                                                required: '*Required',
                                                maxLength: {
                                                    message: 'City name must be less than 85 characters',
                                                    value: 85,

                                                },
                                                pattern: {
                                                    value: /^[A-Za-z-]+$/i,
                                                    message: 'Illegal character input'
                                                },
                                            })}
                                        />
                                        <div className="invalidInput"><p>{formState.errors.city && formState.errors.city.message}</p></div>
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="postcode">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your postcode" aria-label="postcode" aria-describedby="basic-addon1"
                                            {...register('postcode', {
                                                required: '*Required',
                                                maxLength: {
                                                    message: 'Over max characters input',

                                                },
                                                pattern: {
                                                    //Between 5-7 characters, number 1st on 2nd string, last 2 characters non-numeric
                                                    value: /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i,
                                                    message: 'Please enter valid UK postcode format'
                                                },
                                            })} />
                                        <div className="invalidInput"><p>{formState.errors.postcode && formState.errors.postcode.message}</p></div>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <h2 className="section-heading">Vehicle Details</h2>
                            <Row>

                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="vehicleType">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Vehicle Type</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Select
                                                    {...register('vehicleType', {
                                                        required: '*Required',
                                                        
                                                    })}>
                                                    <option style={{ display: 'none' }} value="">Select Vehicle Type</option>
                                                    <option value="Cabriolet">Cabriolet</option>
                                                    <option value="Coupe">Coupe</option>
                                                    <option value="Estate">Estate</option>
                                                    <option value="Hatchback">Hatchback</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                                <div className="invalidInput"><p>{formState.errors.vehicleType && formState.errors.vehicleType.message}</p></div>
                                            </Col>
                                        </Row>

                                    </Form.Group>
                                </Col>

                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="engineSize">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Engine Size</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Select
                                                    {...register('engineSize', {
                                                        required: '*Required'                                                     
                                                    })}>
                                                    <option style={{ display: 'none' }} value="">Select Engine Size</option>
                                                    <option value="1000">1000</option>
                                                    <option value="1600">1600</option>
                                                    <option value="2000">2000</option>
                                                    <option value="2500">2500</option>
                                                    <option value="3000">3000</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                                <div className="invalidInput"><p>{formState.errors.engineSize && formState.errors.engineSize.message}</p></div>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>

                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="currentVehicleValue">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Current value</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control type="number" placeholder="£" aria-label="current value" aria-describedby="basic-addon1"
                                                    {...register('currentVehicleValue', {
                                                        required: '*Required',
                                                        min: {
                                                            message: 'Please enter value over £0.00',
                                                            value: 0,
                                                        },
                                                        max: {
                                                            message: 'Please enter value less than £50,000',
                                                            value: 50000,
                                                        },
                                                        pattern: {
                                                            
                                                            value: /^[0-9]*$/,
                                                            message: 'Please only enter numeric values'
                                                        },
                                                    })} />
                                                <div className="invalidInput"><p>{formState.errors.currentVehicleValue && formState.errors.currentVehicleValue.message}</p></div>
                                            </Col>
                                        </Row>

                                    </Form.Group>
                                </Col>

                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="dateVehicleRegistered">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>When was this vehicle first registered</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control type="date" placeholder="" aria-label="Vehicle register date" aria-describedby="basic-addon1"
                                                    {...register('dateVehicleRegistered', {
                                                        required: '*Required',
                                                        pattern: {
                                                            value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                                                            message: 'Please enter a valid date in format yyyy-mm-dd',

                                                        },
                                                       
                                                    })} />
                                                <div className="invalidInput"><p>{formState.errors.dateVehicleRegistered && formState.errors.dateVehicleRegistered.message}</p></div>
                                            </Col>
                                        </Row>

                                    </Form.Group>
                                </Col>
                            </Row>


                            <h2 className="section-heading">Vehicle Usage</h2>

                            <Row>


                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="additionalDrivers">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>How many additional drivers</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Select
                                                    {...register('additionalDrivers', {
                                                        required: '*Required',
                                                        min: {
                                                            value: 1,
                                                            message: 'Please select between 1-4 additional drivers',

                                                        },
                                                    })}>
                                                    <option style={{ display: 'none' }} value="">Select Addditional Drivers</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </Form.Select>
                                                <div className="invalidInput"><p>{formState.errors.additionalDrivers && formState.errors.additionalDrivers.message}</p></div>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>





                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="usedCommercialPurposes">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Used for commerical purposes</Form.Label>
                                            </Col>

                                            <Col md={6}>
                                                <input
                                                    type="radio"
                                                    id="yes"
                                                    className="radio"
                                                    value="Yes"

                                                    {...register("usedCommercialPurposes", { required: true })} />


                                                <Form.Label className="labelstyle">Yes</Form.Label>
                                                <input type="radio"
                                                    id="no"
                                                    className="radio"
                                                    value="No"

                                                    {...register("usedCommercialPurposes", { required: true })} />
                                                <Form.Label className="labelstyle">No</Form.Label>

                                                <div className="invalidInput"><p>{errors.usedCommercialPurposes?.type === "required" &&
                                                    "*Please select an Option"}</p></div>

                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>

                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="usedOutsideState">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Used outside state</Form.Label>
                                            </Col>


                                            <Col md={6}>


                                                <input
                                                    type="radio"
                                                    id="yes"
                                                    className="radio"
                                                    value="Yes"

                                                    {...register("usedOutsideState", { required: true })} />


                                                <Form.Label className="labelstyle">Yes</Form.Label>
                                                <input type="radio"
                                                    id="no"
                                                    className="radio"
                                                    value="No"

                                                    {...register("usedOutsideState", { required: true })} />
                                                <Form.Label className="labelstyle">No</Form.Label>

                                                <div className="invalidInput"> <p>{errors.usedOutsideState?.type === "required" &&
                                                    "*Please select an Option"}</p></div>

                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>


                            </Row>
                            <Col sm={12}>
                                <Button type="submit">Submit</Button>



                            </Col>



                        </div>
                    </Form>
                </Container>
            </section>
        </main>
    );




}
export default InputDetails;
