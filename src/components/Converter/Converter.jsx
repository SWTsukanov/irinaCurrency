import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Form from '../Form/Form'
import { getConvertedAmount } from "../../helpers";
import { getCurrencyRate, getCurrencyType } from '../../redux/selectors';
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
        setBynAmount(value);
    }

    return (
        <div className="converter">
            <Form onChange={handleChange} value={bynAmount} formName='You give the next ammount of BYN'/>
            <Form value={convertedAmount} readonly={true} formName={`You get the next ammount of ${currentCurrency || "..."}`}/>
        </div>
      );
}

export default Converter;