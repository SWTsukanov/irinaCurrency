export const getConvertedAmount = (bynAmount, currencyRate) => {
    if (typeof bynAmount !== "number" || !currencyRate) return 0;
    console.log(bynAmount * currencyRate);
    return bynAmount * currencyRate;
}