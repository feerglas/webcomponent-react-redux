import { actionTypes } from './constants';

export const language = language => (dispatch) => {
	dispatch(
		{
			type: actionTypes.LANGUAGE,
			payload: language
		}
	);
};

export const results = results => (dispatch) => {
	dispatch(
		{
			type: actionTypes.RESULTS,
			payload: results
		}
	);
};

export const from = from => (dispatch) => {
	dispatch(
		{
			type: actionTypes.TITLE_FROM,
			payload: from
		}
	);
};

export const to = to => (dispatch) => {
	dispatch(
		{
			type: actionTypes.TITLE_TO,
			payload: to
		}
	);
};

export const autocompleteOrigin = autocompleteOrigin => (dispatch) => {
	dispatch(
		{
			type: actionTypes.AUTOCOMPLETE_ORIGIN,
			payload: autocompleteOrigin
		}
	);
};

export const autocompleteDestination = autocompleteDestination => (dispatch) => {
	dispatch(
		{
			type: actionTypes.AUTOCOMPLETE_DESTINATION,
			payload: autocompleteDestination
		}
	);
};

export const origin = origin => (dispatch) => {
	dispatch(
		{
			type: actionTypes.ORIGIN,
			payload: origin
		}
	);
};

export const destination = destination => (dispatch) => {
	dispatch(
		{
			type: actionTypes.DESTINATION,
			payload: destination
		}
	);
};
