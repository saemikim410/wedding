import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';


import './App.css';

import Version1 from './Version1.js';
import Version2 from './Version2.js';

import usePreventZoom from './hooks/usePreventZoom.js';


function App() {
  usePreventZoom();  

  let [pushTab, setPushTab] = useState(0);

  function TabContent(props) {
    if(props.pushTab === 0) {
        return <Version1 />
    } else if(props.pushTab === 1) {
        return <Version2 />
    }
}

  return (
    <div className="App">
      <Nav className="nav-pills nav-fill" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={ ()=>{ setPushTab(0) } }>Version1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={ ()=>{ setPushTab(1) } }>Version2</Nav.Link>
        </Nav.Item>
    </Nav>
    <TabContent pushTab={pushTab} />
  </div>
  );
}

export default App;
