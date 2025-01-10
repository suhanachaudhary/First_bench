// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Metrics from './components/Metrics';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-container partition">
        <div className="sidebar"><Sidebar/></div>
        <div className="metrics"><Metrics/></div>
      </div>
    </div>
  );
};

export default App;
