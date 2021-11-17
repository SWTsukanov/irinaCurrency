import { createStore, combineReducers, applyMiddleware, compose  } from "redux";
import thunkMiddleware from "redux-thunk";
import currencyReducer from "./reducers/currencyReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose;

let reducers = combineReducers({
    currency: currencyReducer
});

let store = createStore(
                reducers, 
                composeEnhancers(applyMiddleware(thunkMiddleware)),
                );

window.store = store;

export default store;