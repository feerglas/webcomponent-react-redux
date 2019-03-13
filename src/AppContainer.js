import { connect } from 'react-redux';
import App from './App';

import { language, results, from, to } from './model/actions';

const mapDispatchToProps = dispatch => ({
	setLanguage(callback) {
		dispatch(language(callback));
	},
	setResults(callback) {
		dispatch(results(callback));
	},
	setTitleFrom(callback) {
		dispatch(from(callback));
	},
	setTitleTo(callback) {
		dispatch(to(callback));
	}
});

const mapStateToProps = (state) => {
	return {
		language: state.language,
		titleFrom: state.title.from,
		titleTo: state.title.to
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
