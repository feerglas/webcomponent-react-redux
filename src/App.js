import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTimeContainer from './components/DateTime/DateTimeContainer';

class App extends Component {
	setNewDate = () => {
		const date = new Date();

		this.props.date(date.toString());
	}

	update = () => {
		this.setNewDate();
	}

	componentDidMount() {
		this.setNewDate();
	}

	render() {
		return (
			<div>
				<DateTimeContainer />
				<button onClick={this.update.bind(this)}>update</button>
			</div>
		);
	}
}

App.propTypes = {
	date: PropTypes.func
};

export default App;
