import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ReadAllDrivers.css';
import {Button, Row, Col, Container, Table} from 'react-bootstrap';
import SERVER_URL from "../../utils/constans";
import {useHistory} from "react-router";


function ReadAllDrivers() {

    const [tableData, setTableData] = useState([]);
    let history = useHistory();

    function callAPIWithAxiosGET() {
        const endpointURL = `${SERVER_URL}/drivers/`;
        axios.get(endpointURL)
            .then(response => setTableData(response.data))
            .catch(
                (err) => {
                    console.log(err)
                }
            );
    }

    useEffect(() => {
        callAPIWithAxiosGET();
    }, []);

    return (
        <main className="page readAllDrivers-page">
            <section className="readAllDrivers-page dark">
                <Container>
                    <div className="block-heading">
                        <h2>All Driver Records</h2>
                        <p></p>
                    </div>
                    <Row>
                        <div className="readAllDrivers-panel">
                            <Row>
                                <Col xs={12}>
                                    <section className="readAllDrivers-panel-layout">

                                        <h3 className="section-heading">Personal Details For Quoted Drivers</h3>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Contact Number</th>
                                                <th>Address Line 1</th>
                                                <th>Address Line 2</th>
                                                <th>City</th>
                                                <th>Postcode</th>
                                                <th>View Driver</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {tableData.map(
                                                data => {
                                                    return (
                                                        <tr key={data.id}>
                                                            <td>{data.id}</td>
                                                            <td>{data.firstName}</td>
                                                            <td>{data.lastName}</td>
                                                            <td>{data.contactNumber}</td>
                                                            <td>{data.addressLine1}</td>
                                                            <td>{data.addressLine2}</td>
                                                            <td>{data.city}</td>
                                                            <td>{data.postcode}</td>
                                                            <td>
                                                                <Button type="submit" onClick={() => {
                                                                    history.push(`../readdriver/${data.id}`)
                                                                }}>Details</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                        <h3 className="section-heading"></h3>
                                        <Link to="/administrator">
                                            <Button type="submit">Admin Page</Button>
                                        </Link>
                                    </section>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default ReadAllDrivers;
