import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TimetableSearch extends Component {

	constructor(props) {
		super(props);

		this.didSelectFromAutocomplete = {};

		// bind methods
		this.handleBlur = this.handleBlur.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleSelection = this.handleSelection.bind(this);

		// refs
		this.searchOriginRef = React.createRef();
		this.searchDestinationRef = React.createRef();

		// axios
		this.CancelToken = axios.CancelToken;
	}

	componentDidMount() {
		this.searchOriginRef.current.addEventListener('sbb-autocomplete_blur', this.handleBlur);
		this.searchOriginRef.current.addEventListener('sbb-autocomplete_input', this.handleInput);
		this.searchOriginRef.current.addEventListener('sbb-autocomplete_selection', this.handleSelection);
		this.searchDestinationRef.current.addEventListener('sbb-autocomplete_blur', this.handleBlur);
		this.searchDestinationRef.current.addEventListener('sbb-autocomplete_input', this.handleInput);
		this.searchDestinationRef.current.addEventListener('sbb-autocomplete_selection', this.handleSelection);
	}

	componentWillUnmount() {
		this.searchOriginRef.current.removeEventListener('sbb-autocomplete_blur', this.handleBlur);
		this.searchOriginRef.current.removeEventListener('sbb-autocomplete_input', this.handleInput);
		this.searchOriginRef.current.removeEventListener('sbb-autocomplete_selection', this.handleSelection);
		this.searchDestinationRef.current.removeEventListener('sbb-autocomplete_blur', this.handleBlur);
		this.searchDestinationRef.current.removeEventListener('sbb-autocomplete_input', this.handleInput);
		this.searchDestinationRef.current.removeEventListener('sbb-autocomplete_selection', this.handleSelection);
	}

	handleBlur(evt) {

		const type = evt.target.name;

		if (this.didSelectFromAutocomplete[type]) {
			return;
		}

		if (type === 'origin') {
			evt.target.value = JSON.parse(this.props.autocompleteOrigin)[0].label;
		} else {
			evt.target.value = JSON.parse(this.props.autocompleteDestination)[0].label;
		}

	}

	handleInput(evt) {
		const type = evt.target.name;
		const value = evt.detail.input;
		const cancelTokenKey = `${type}CancelToken`;
		const cancelToken = this[cancelTokenKey];

		this.didSelectFromAutocomplete[type] = false;

		if (value.length < 1) {
			return;
		}

		cancelToken && cancelToken();

		axios
			.get(`https://global-warmer.com/sbb/station-search/${value}`, {
				cancelToken: new this.CancelToken((cancelToken) => {
					this[cancelTokenKey] = cancelToken;
				})
			})
			.then((res) => {
				const locations = res.data.locations;

				if (locations && locations.length > 0) {
					const suggestions = locations.map(location => ({
						label: location.name,
						id: location.uic
					}));

					if (type === 'origin') {
						this.props.setAutocompleteOrigin(JSON.stringify(suggestions));
						this.props.setOrigin(suggestions[0]);
					} else {
						this.props.setAutocompleteDestination(JSON.stringify(suggestions));
						this.props.setDestination(suggestions[0]);
					}

					this.validateSearch();
				}
			}).catch((err) => {
				console.log('Error requesting Stations: ', err);
			});
	}

	handleSelection(evt) {
		const type = evt.target.name;
		const selection = evt.detail.selection;

		this.didSelectFromAutocomplete[type] = true;

		if (type === 'origin') {
			this.props.setOrigin(selection);
		} else {
			this.props.setDestination(selection);
		}

		this.validateSearch();
	}

	validateSearch() {
		const from = this.props.origin;
		const to = this.props.destination;

		if (!from.id || !to.id) {
			return;
		}

		this.props.searchCallback(from, to);
	}

	render() {
		return (
			<sbb-timetable-search>
				<sbb-autocomplete
					name='origin'
					suggestions={this.props.autocompleteOrigin}
					ref={this.searchOriginRef}
					slot='origin'
				></sbb-autocomplete>
				<sbb-autocomplete
					name='destination'
					suggestions={this.props.autocompleteDestination}
					ref={this.searchDestinationRef}
					slot='destination'
				></sbb-autocomplete>
			</sbb-timetable-search>
		);
	}
}

TimetableSearch.propTypes = {
	searchCallback: PropTypes.func,
	origin: PropTypes.object,
	destination: PropTypes.object,
	autocompleteOrigin: PropTypes.string,
	autocompleteDestination: PropTypes.string,
	setOrigin: PropTypes.func,
	setDestination: PropTypes.func,
	setAutocompleteOrigin: PropTypes.func,
	setAutocompleteDestination: PropTypes.func
};

export default TimetableSearch;
