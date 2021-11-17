import React from 'react';
import './App.css';
import Converter from './components/Converter/Converter';
import CurrencyCheckbox from './components/CurrencyCheckbox/CurrencyCheckbox';
import CurrencyRate from './components/CurrencyRate/CurrencyRate';

const App = () => {
  return (
    <div className="app">
      <div className='app__container'>
        <h1>Currency exchange</h1>
        <CurrencyCheckbox />
        <CurrencyRate />
        <Converter />
      </div>
    </div>
  );
}

export default App;
