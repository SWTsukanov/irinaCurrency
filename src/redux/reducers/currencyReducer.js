import {
	SET_CURRENCY,
	SET_CURRENCY_RATE
} from "../actions/types";

let initialState = {
	current_currency: null,
	currency_rate: null,	
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
			currency_rate: action.currency_rate,
		};
		default:
			return state;
	}
};

export default currencyReducer;