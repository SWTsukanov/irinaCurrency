import React from "react";
import { currencyTypes } from '../../types/CurrencyTypes';
import './CurrencyCheckbox.css';

const CurrencyRadioButton = ({ name, value, isChecked, handleChange, label}) => {
    
    const handleRadioChange = e => {
        handleChange(currencyTypes[e.target.id]);
      };

    return (
        <div className={`customRadio ${isChecked && 'customRadio_checked'}`}>
            <input
                className="customRadio__input"
                type="radio"
                name={name}
                id={value} 
                checked={isChecked}
                onChange={handleRadioChange}
            />
            <label className="customRadio__label" htmlFor={value}>
                <span>{label}</span>
            </label>
      </ div>
    )
}

export default CurrencyRadioButton;