import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Form from '../Form/Form'
import { getConvertedAmount } from "../../redux/helpers";

const Converter = () => {
    const currentCurrency = useSelector(state => state.currency.currentCurrency); 

    const [bynAmount, setBynAmount] = useState();
    const [convertedAmount, setConvertedAmount] = useState();

    const handleChange = (e) => {
        const value = Number(e.currentTarget.value);
        setBynAmount(value);
        setConvertedAmount(getConvertedAmount(value));
    }

    return (
        <div>
            <Form onChange={handleChange} value={bynAmount} formName='You give the next ammount of BYN'/>
            <Form value={convertedAmount} readonly={true} formName={`You get the next ammount of ${currentCurrency || "..."}`}/>
        </div>
      );
}

export default Converter;