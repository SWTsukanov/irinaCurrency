import { SET_CURRENCY, SET_CURRENCY_RATE } from './types';

export const setCurrency = (currency) => ({ type: SET_CURRENCY, currency});
export const setCurrencyRate = (currencyRate) => ({ type: SET_CURRENCY_RATE, currencyRate });
