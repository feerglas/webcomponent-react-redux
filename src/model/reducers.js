import { combineReducers } from 'redux';
import { actionTypes } from './constants';

const language = (state = 'de', action) => {
	switch (action.type) {
		case actionTypes.LANGUAGE:
			return action.payload || state;
		default:
			return state;
	}
};

const results = (state = [], action) => {
	switch (action.type) {
		case actionTypes.RESULTS:
			return action.payload || state;
		default:
			return state;
	}
};

const from = (state = '', action) => {
	switch (action.type) {
		case actionTypes.TITLE_FROM:
			return action.payload || state;
		default:
			return state;
	}
};

const to = (state = '', action) => {
	switch (action.type) {
		case actionTypes.TITLE_TO:
			return action.payload || state;
		default:
			return state;
	}
};

const autocompleteOrigin = (state = '', action) => {
	switch (action.type) {
		case actionTypes.AUTOCOMPLETE_ORIGIN:
			return action.payload || state;
		default:
			return state;
	}
};

const autocompleteDestination = (state = '', action) => {
	switch (action.type) {
		case actionTypes.AUTOCOMPLETE_DESTINATION:
			return action.payload || state;
		default:
			return state;
	}
};

const origin = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.ORIGIN:
			return action.payload || state;
		default:
			return state;
	}
};

const destination = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.DESTINATION:
			return action.payload || state;
		default:
			return state;
	}
};

export default combineReducers({
	language,
	results,
	title: combineReducers({
		from,
		to
	}),
	autocomplete: combineReducers({
		autocompleteOrigin,
		autocompleteDestination
	}),
	origin,
	destination
});
