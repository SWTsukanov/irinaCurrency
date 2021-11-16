import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from './redux/actions/currency';
import { currencyTypes } from './types/CurrencyTypes';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector(state => state.currency.current_currency);

  const handleClick = () => {
    dispatch(setCurrency(currencyTypes.rub));
  }

  return (
    <div className="app" onClick={handleClick}>
      Click me
      {currentCurrency}
    </div>
  );
}

export default App;
