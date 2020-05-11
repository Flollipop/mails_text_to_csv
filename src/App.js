import React from 'react';
import './App.css';
import Converter from './Converter';

const repoLink = 'https://github.com/Flollipop/mails_text_to_csv';
const headerLabel = 'Email address parser to csv';
const footerLabel = 'See the code project';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>{headerLabel}</header>
      <div className={'App-body'}>
        <Converter />
      </div>
      <footer className={'App-footer'}>
        <a className={'App-link'} href={repoLink} target='_blank' rel='noopener noreferrer'>
          {footerLabel}
        </a>
      </footer>
    </div>
  );
}

export default App;
