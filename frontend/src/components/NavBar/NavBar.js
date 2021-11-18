import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import {Container, Nav} from "react-bootstrap";

function NavBar(){

    return(
        <Navbar  className="navBarStyle">

                <Navbar.Brand  href="/">
                    <img
                        alt=""
                        src="./logo5.png"
                        width="250"
                        height="40"
                        className="logoStyle"
                    />{' '}

                </Navbar.Brand>
            <span className="navPageHeading">Vehicle Insurance</span>
            <Nav.Link className="navTextStyle" href="/">Get Insurance Quote</Nav.Link>
            <Nav.Link className="navTextStyle" href="/administrator">Admin Page</Nav.Link>

        </Navbar>
    );
}

export default NavBar;
