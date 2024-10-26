import React from 'react';
import Header from './Header';
import TopMetrics from './TopMetric';
import SidePanel from './SidePanel';
import DummyMap from './DummyMap';
import ActivityFeed from './ActivityFeed';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="main-content">
                <SidePanel />
                <div className="dashboard-content">
                    <TopMetrics />
                    <DummyMap />
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;