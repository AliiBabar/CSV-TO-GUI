// src/components/SidePanel.js
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const SidePanel = () => {
    return (
        <div className="side-panel">
            <ListGroup>
                <ListGroup.Item><Button variant="link">Add Data</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="link">Export Data</Button></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default SidePanel;
