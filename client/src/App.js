// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Dashboard/Header';
import SidePanel from './components/Dashboard/SidePanel';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SidePanel />
      <div style={{ flexGrow: 1 }}>
        <Header />
      </div>
    </div>
  );
}

export default App;

