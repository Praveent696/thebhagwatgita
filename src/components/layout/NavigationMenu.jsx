import React from 'react';
import { Navbar , Nav  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Chapters from '../chapters/Chapters';
import Verses from '../verses/Verses';


const LinkStyle = {
    textDecoration:'none',
    color:'white',
    padding:'10px'
}

const NavigationMenu = (props) => {
    return (
        <>
         <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://bhagavadgita.io/static/images/radhakrishna.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    The Bhagwat Gita
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" style={LinkStyle}>Chapters</Nav.Link>
                        <Nav.Link href="/verses" style={LinkStyle}>Verses</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                   <Chapters></Chapters>
                </Route>
                <Route path="/verses">
                    <Verses></Verses>
                </Route>
            </Switch>
        </Router>
        </>
    )
};

export default NavigationMenu;
