import React from 'react';
import './App.css';
import CurrencyCheckbox from './components/CurrencyCheckbox/CurrencyCheckbox';
import CurrencyRate from './components/CurrencyRate/CurrencyRate';

const App = () => {
  return (
    <div className="app">
      <div className='app__container'>
        <h1>Currency exchange</h1>
        <CurrencyCheckbox />
        <CurrencyRate />
      </div>
    </div>
  );
}

export default App;
