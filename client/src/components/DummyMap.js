// src/components/DummyMap.js
import React from 'react';
import { Card } from 'react-bootstrap';

const DummyMap = () => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Regional Sales Heatmap</Card.Title>
                <div style={{ height: '200px', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span>Map Placeholder</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default DummyMap;
