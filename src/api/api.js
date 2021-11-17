import { setCurrencyRate } from "../redux/actions/currency";

export const getCurrencyRate = (toCurrency, fromCurrency="BYR") => {

    let apiKey = process.env.REACT_APP_CURRENCY_API_KEY;

    let url = "https://freecurrencyapi.net/api/v2/latest?apikey="
             + apiKey + "&base_currency=" + fromCurrency;

    return async (dispatch) => {
        const response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            dispatch(setCurrencyRate(json.data[toCurrency]));
          } else {
            alert("Ошибка HTTP: " + response.status);
          }
    }
}