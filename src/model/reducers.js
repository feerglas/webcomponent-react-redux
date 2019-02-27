import { combineReducers } from 'redux';
import { actionTypes } from './constants';

const date = (state = '', action) => {
	switch (action.type) {
		case actionTypes.date:
			return action.payload || state;
		default:
			return state;
	}
};

export default combineReducers({
	date
});
