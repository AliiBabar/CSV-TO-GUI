// src/components/TopMetrics.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const TopMetrics = () => {
    return (
        <Row className="mb-4">
            <Col>
                <Card bg="primary" text="white">
                    <Card.Body>
                        <Card.Title>Total Orders</Card.Title>
                        <Card.Text>1234</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="success" text="white">
                    <Card.Body>
                        <Card.Title>Total Cost</Card.Title>
                        <Card.Text>$500,000</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="warning" text="white">
                    <Card.Body>
                        <Card.Title>Average Order Value</Card.Title>
                        <Card.Text>$400</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="info" text="white">
                    <Card.Body>
                        <Card.Title>Last Updated</Card.Title>
                        <Card.Text>10/26/2024</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TopMetrics;
