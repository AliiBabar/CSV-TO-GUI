// src/components/Dashboard/SidePanel.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SidePanel = () => {
    return (
        <Nav className="flex-column side-panel">
            <Nav.Link as={Link} to="/" className="nav-link">
                <span className="nav-icon">🏠</span> Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/insights" className="nav-link">
                <span className="nav-icon">📊</span> Insights
            </Nav.Link>
            <Nav.Link className="nav-link">
                <span className="nav-icon">👤</span> Account
            </Nav.Link>
            <Nav.Link className="nav-link">
                <span className="nav-icon">⚙️</span> Settings
            </Nav.Link>
        </Nav>
    );
};

export default SidePanel;

