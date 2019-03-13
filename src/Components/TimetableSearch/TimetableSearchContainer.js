import { connect } from 'react-redux';
import TimetableSearch from './TimetableSearch';

import { origin, destination, autocompleteOrigin, autocompleteDestination } from '../../model/actions';

const mapDispatchToProps = dispatch => ({
	setOrigin(callback) {
		dispatch(origin(callback));
	},
	setDestination(callback) {
		dispatch(destination(callback));
	},
	setAutocompleteOrigin(callback) {
		dispatch(autocompleteOrigin(callback));
	},
	setAutocompleteDestination(callback) {
		dispatch(autocompleteDestination(callback));
	}
});

const mapStateToProps = (state) => {
	return {
		origin: state.origin,
		destination: state.destination,
		autocompleteOrigin: state.autocomplete.autocompleteOrigin,
		autocompleteDestination: state.autocomplete.autocompleteDestination
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TimetableSearch);
