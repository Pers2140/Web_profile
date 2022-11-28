import './App.css';
import React from 'react';

import Main from './Components/Main';

const appStyle = {
  backgroundColor: "#abbdd8",
  minHeight:"1200px",
  fontFamily:"Monospace",
  
};

function App() {
  return (
    <div style={appStyle} className="App">
      
      <Main />

    </div>
  );
}

export default App;
