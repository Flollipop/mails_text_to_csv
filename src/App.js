import React from 'react';
import './App.css';
import Converter from './Converter';

const headerLabel = 'Email address parser to csv';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>{headerLabel}</header>
      <Converter />
    </div>
  );
}

export default App;
