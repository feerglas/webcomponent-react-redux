import { actionTypes } from './constants';

export const language = language => (dispatch) => {
	dispatch(
		{
			type: actionTypes.language,
			payload: language
		}
	);
};
