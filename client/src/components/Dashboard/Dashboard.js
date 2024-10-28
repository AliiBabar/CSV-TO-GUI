// src/components/Dashboard.js
import React from 'react';
import Header from './Header';
import SidePanel from './SidePanel';
import TopMetric from './TopMetric';
import DummyMap from './DummyMap';
import ActivityFeed from './ActivityFeed';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <SidePanel />
            <div className="main-content">
                <Header />
                <div className="dashboard-content">
                    <TopMetric />
                    <DummyMap />
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
