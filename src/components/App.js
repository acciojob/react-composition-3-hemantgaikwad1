import React from 'react';
import Tooltip from './Tooltip';
import '../styles/App.css';

function App() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h2>React Composition: Tooltip</h2>
      <p>
       <Tooltip text="This is the tooltip content!"><h1>hover over me</h1></Tooltip> 
      </p>
      <p>
         <Tooltip text="This is the another tooltip content!">hover over me to see another tooltip</Tooltip>.
      </p>
    </div>
  );
}

export default App;