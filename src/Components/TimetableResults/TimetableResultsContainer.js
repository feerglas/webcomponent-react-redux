import { connect } from 'react-redux';
import TimetableResults from './TimetableResults';

import { language } from '../../model/actions';

const mapStateToProps = (state) => {
	return {
		results: state.results
	};
};

export default connect(mapStateToProps, null)(TimetableResults);
