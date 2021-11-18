import { setCurrencyRate } from "../redux/actions/currency";
import axios from 'axios';

class EnvProperties {
  static apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
}

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL:"https://freecurrencyapi.net"
    });
    this.getCurrencyRate.bind(this);
  }

  getCurrencyRate(toCurrency, fromCurrency="BYR") {
    return async (dispatch) => {
        this.instance
        .get('/api/v2/latest', {
          params: {
            apikey: EnvProperties.apiKey,
            base_currency: fromCurrency
          }
        })
        .then(response => {
          dispatch(setCurrencyRate(response.data.data[toCurrency]));
        })
        .catch(error => console.log(error.message));
    }
  }
}

const API = new Api();

export default API;