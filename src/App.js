import React, { useState, useEffect } from 'react';

import './App.css';

import Version1 from './Version1.js';
import Version2 from './Version2.js';

import usePreventZoom from './hooks/usePreventZoom.js';


function App() {
  usePreventZoom();  

  const [activeTab, setActiveTab] = useState('our');

  useEffect(() => {
    const body = document.body;
    if (activeTab === 'our') {
      body.classList.remove('jeju-mode');
      body.classList.add('studio-mode');
    } else {
      body.classList.remove('studio-mode');
      body.classList.add('jeju-mode');
    }

    return () => {
      body.classList.remove('studio-mode', 'jeju-mode');
    };
  }, [activeTab]);


return (
  <div className="wedding-tabs-wrapper">
    <div className="wedding-tabs">
      <div
        className={`wedding-tab ${activeTab === 'our' ? 'active' : ''}`}
        onClick={() => setActiveTab('our')}
      >
        우리 둘
      </div>
      <div
        className={`wedding-tab ${activeTab === 'jeju' ? 'active' : ''}`}
        onClick={() => setActiveTab('jeju')}
      >
        그날, 제주
      </div>
    </div>

    <div className="tab-content">
      {activeTab === 'our' ? (
        <Version1 />
      ) : (
        <Version2 />
      )}
    </div>
  </div>
);
}

export default App;
