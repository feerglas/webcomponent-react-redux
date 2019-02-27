import { actionTypes } from './constants';

export const date = date => (dispatch) => {
	dispatch(
		{
			type: actionTypes.date,
			payload: date
		}
	);
};
