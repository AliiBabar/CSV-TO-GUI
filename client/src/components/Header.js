// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Business Analytics Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Insights
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Product Sales and Profit Insights</Dropdown.Item>
                            <Dropdown.Item href="#">Customer Segmentation</Dropdown.Item>
                            <Dropdown.Item href="#">Geographic Distribution</Dropdown.Item>
                            <Dropdown.Item href="#">Top Performing Products</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
