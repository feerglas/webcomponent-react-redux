import { connect } from 'react-redux';
import App from './App';

import { language } from './model/actions';

const mapDispatchToProps = dispatch => ({
	setLanguage(callback) {
		dispatch(language(callback));
	}
});

const mapStateToProps = (state) => {
	return {
		language: state.language
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
