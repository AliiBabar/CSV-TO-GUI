// src/components/TopMetric.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TopMetric = () => {
    return (
        <div className="overview-metrics">
            <h5 className="section-title">Overview Metrics</h5>
            <ListGroup variant="flush">
                <ListGroup.Item>Total Orders <span className="metric-value">1234</span></ListGroup.Item>
                <ListGroup.Item>Total Cost <span className="metric-value">$500,000</span></ListGroup.Item>
                <ListGroup.Item>Average Order Value <span className="metric-value">$400</span></ListGroup.Item>
                <ListGroup.Item>Last Updated <span className="metric-value">10/26/2024</span></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default TopMetric;
