import React from "react";
import { useSelector } from 'react-redux';
import { getCurrencyRate } from "../../redux/selectors";
import '../CurrencyCheckbox/CurrencyCheckbox.css';

const CurrencyRate = () => {
    const currencyRate = useSelector(getCurrencyRate); 

    return (
        <div className="currencyCheckbox">
          <div className="currencyCheckbox__name">Current rate:</div>
          <div className="currencyCheckbox__list">
              {currencyRate}
          </div>
        </div>
      );
}

export default CurrencyRate;