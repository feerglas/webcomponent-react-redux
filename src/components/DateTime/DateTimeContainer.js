import { connect } from 'react-redux';
import DateTime from './DateTime';

const mapStateToProps = (state) => {
	return {
		date: state.date
	};
};

export default connect(mapStateToProps, null)(DateTime);
