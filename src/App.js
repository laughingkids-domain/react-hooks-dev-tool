import React from 'react';
import Increment from './Increment'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Increment title="CRE Tech Catchup Sep Session 1"/>
      </header>
    </div>
  );
}

export default App;
