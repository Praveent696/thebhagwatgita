import React from 'react';
import { Navbar , Nav  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand to="/">
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
                        <Link to="/" style={LinkStyle}>Chapters</Link>
                        <Link to="/verses" style={LinkStyle}>Verses</Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                   <Chapters></Chapters>
                </Route>
                <Route exact path="/chapter/:chapter_number/verses">
                    <Verses></Verses>
                </Route>
                <Route exact path="/verses">
                    <Verses></Verses>
                </Route>
                <Route exact path="/chapter/:chapter_number/verses/:verse_number">
                    <Verses></Verses>
                </Route>
            </Switch>
        </Router>
        </>
    )
};

export default NavigationMenu;
