export const getConvertedAmount = (bynAmount, currencyRate) => {
    if (!currencyRate) return "";
    return (bynAmount * currencyRate).toFixed(3);
}

export const stringToNumber = (value) => parseInt(value.replace(/\./g, ""), 10);