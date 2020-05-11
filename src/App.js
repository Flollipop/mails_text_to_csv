import React from 'react';
import './App.css';
import Converter from './Converter';
import { Header } from './Header';

const repoLink = 'https://github.com/Flollipop/mails_text_to_csv';
const footerLabel = 'See the code project';

function App() {
  return (
    <div className='App'>
      <Header />
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
