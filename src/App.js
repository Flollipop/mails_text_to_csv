import React from 'react';
import './App.css';
import Converter from './Converter';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className={'App-body'}>
        <Converter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
