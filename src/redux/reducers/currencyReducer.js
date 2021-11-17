import {
	SET_CURRENCY,
	SET_CURRENCY_RATE
} from "../actions/types";

let initialState = {
	currentCurrency: null,
	currencyRate: null,	
};

const currencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENCY:
			return {
				...state,
				current_currency: action.currency,
			};
		case SET_CURRENCY_RATE: 
		return {
			...state,
			currency_rate: action.currencyRate,
		};
		default:
			return state;
	}
};

export default currencyReducer;