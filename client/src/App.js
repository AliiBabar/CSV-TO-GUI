import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Dashboard/Header';
import SidePanel from './components/Dashboard/SidePanel';
import DummyMap from './components/Dashboard/DummyMap';
import TopMetric from './components/Dashboard/TopMetric'; // Ensure correct naming
import ActivityFeed from './components/Dashboard/ActivityFeed';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SidePanel />
      <div style={{ flexGrow: 1, padding: '16px' }}>
        <Header />
        <div style={{ display: 'flex', alignItems: 'stretch', marginTop: '16px' }}>
          <TopMetric />
          <Box sx={{ width: '30%', marginLeft: '16px' }}>
            <DummyMap />
          </Box>
        </div>
        <ActivityFeed /> {/* Placed below TopMetrics and DummyMap */}
      </div>
    </div>
  );
}

export default App;


