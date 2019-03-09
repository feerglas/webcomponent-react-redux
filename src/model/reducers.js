import { combineReducers } from 'redux';
import { actionTypes } from './constants';

const language = (state = 'de', action) => {
	switch (action.type) {
		case actionTypes.language:
			return action.payload || state;
		default:
			return state;
	}
};

export default combineReducers({
	language
});
