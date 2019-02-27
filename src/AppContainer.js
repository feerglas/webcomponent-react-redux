import { connect } from 'react-redux';
import App from './App';

import { date } from './model/actions';

const mapDispatchToProps = dispatch => ({
	date(callback) {
		dispatch(date(callback));
	}
});

export default connect(null, mapDispatchToProps)(App);
