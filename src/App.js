import React from 'react';
import './App.css';
import Converter from './Converter';

const headerLabel = 'Email address parser to csv';
const footerLabel = 'See the code project';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>{headerLabel}</header>
      <div className={'App-body'}>
        <Converter />
      </div>
      <footer className={'App-footer'}>{footerLabel}</footer>
    </div>
  );
}

export default App;
