import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import './Header.css'

import {
    BrowserRouter as Router, Switch, Route, NavLink
} from "react-router-dom";
import About from '../About/About';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import NotFound from '../NotFound';
import Review from '../Review/Review';


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        backgroundColor: "orange",
        color: 'white',
        border: '1px solid white',
        borderRadius: '10px',
        padding: '5px',

        textDecoration: 'none'

    }

    return (
        <Router>
            <div>

                <Navbar bg="primary" expand="lg" className="container" text-dark me-5>
                    <Navbar.Brand href="#" className="navTitle">Learn With Fun</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="p-3 me-5 navLink"

                        >
                            <NavLink className="me-4 home" activeStyle={activeStyle} to="/home" >Home</NavLink>

                            <NavLink className="me-4" activeStyle={activeStyle} to="/courses" >Courses</NavLink>
                            <NavLink className="me-4" activeStyle={activeStyle} to="/about" >About</NavLink>
                            <NavLink className="me-4" activeStyle={activeStyle} to="/review" >Review</NavLink>
                        </Nav>
                        <Form className="d-flex ml-5 ms-5">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button id="button">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div>
                <Switch>
                    <Route exact path="/home">

                        <Home>

                        </Home>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="/courses">
                        <Courses></Courses>
                    </Route>
                    <Route exact path="/review">
                        <Review></Review>
                    </Route>
                    <Route exact path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </div>



        </Router>
    );
};

export default Header;