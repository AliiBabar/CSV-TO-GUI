// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import each component
import Header from './components/Dashboard/Header';
import SidePanel from './components/Dashboard/SidePanel';
import TopMetric from './components/Dashboard/TopMetric';
import DummyMap from './components/Dashboard/DummyMap';
import ActivityFeed from './components/Dashboard/ActivityFeed';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                          
                            <Header />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
