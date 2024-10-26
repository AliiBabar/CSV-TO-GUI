// src/components/ActivityFeed.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ActivityFeed = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Activity Feed / Announcements</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Data sync completed</ListGroup.Item>
                    <ListGroup.Item>New product added: Electronics</ListGroup.Item>
                    <ListGroup.Item>Upcoming sales report release</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default ActivityFeed;
