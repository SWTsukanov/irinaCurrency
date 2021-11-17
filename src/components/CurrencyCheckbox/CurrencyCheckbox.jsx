import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../redux/actions/currency';
import { currencyTypes } from '../../types/CurrencyTypes';
import CurrencyRadioButton from './CurrencyRadioButton';
import './CurrencyCheckbox.css';
import { getCurrencyRate } from "../../api/api";

const CurrencyCheckbox = () => {
    const dispatch = useDispatch();
    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    
    const handleChange = (val) => {
       dispatch(setCurrency(val));
       dispatch(getCurrencyRate(val));
    };

    const currencyOptions = Object
                .entries(currencyTypes)
                .map((type) => (
                    <CurrencyRadioButton 
                                type="radio" 
                                key={type[0]}
                                value={type[0]} 
                                name="currentCurrency" 
                                label={type[1]} 
                                handleChange={handleChange} 
                                isChecked={currentCurrency === type[1]}/>
                    ));

    return (
        <div className="currencyCheckbox">
          <div className="currencyCheckbox__name">Current currency:</div>
          <div className="currencyCheckbox__list">
            {currencyOptions}
          </div>
        </div>
      );
}

export default CurrencyCheckbox;