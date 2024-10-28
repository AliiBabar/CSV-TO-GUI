import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import SidePanel from './SidePanel';
import DummyMap from './DummyMap';
import TopMetric from './TopMetric';
import ActivityFeed from './ActivityFeed';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidePanel />
      <div style={{ flexGrow: 1, padding: '16px' }}>
        <Header />
        <div style={{ display: 'flex', alignItems: 'stretch', marginTop: '16px' }}>
  <TopMetric />
  <Box sx={{ width: '45%', marginLeft: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
    <DummyMap />
  </Box>
</div>


        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;
