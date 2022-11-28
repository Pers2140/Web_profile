import './App.css';
import React from 'react';

import Main from './Components/Main';

const appStyle = {
  backgroundColor: "#365373",
  minHeight:"1200px",
  color:"white"
};

function App() {
  return (
    <div style={appStyle} className="App">
      
      <Main />

    </div>
  );
}

export default App;
