import React from 'react';
import './App.css';
import Converter from './components/Converter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
