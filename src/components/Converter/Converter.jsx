import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Input from '../Input/Input'
import { getConvertedAmount } from "../../helpers";
import { getCurrencyRate, getCurrencyType } from '../../redux/selectors';
import { numberValidator } from "../../helpers";
import './Converter.css';

const Converter = () => {
    const currentCurrency = useSelector(getCurrencyType); 
    const currencyRate = useSelector(getCurrencyRate);

    const [bynAmount, setBynAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    useEffect(() => {
        setConvertedAmount(getConvertedAmount(Number(bynAmount), currencyRate));
    }, [currencyRate, bynAmount]);

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        setBynAmount(numberValidator(value));
    }

    return (
        <div className="converter">
            <Input onChange={handleChange} value={bynAmount} formName='You give the next ammount of BYN'/>
            <Input value={convertedAmount} readonly={true} formName={`You get the next ammount of ${currentCurrency || "..."}`}/>
        </div>
      );
}

export default Converter;
