export const getConvertedAmount = (bynAmount, currencyRate) => {
    if (!currencyRate) return "";
    return (bynAmount * currencyRate).toFixed(3);
}

export const numberValidator = (value) => value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');