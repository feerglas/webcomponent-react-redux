import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

	constructor(props) {
		super(props);

		this.handleLangSwitch = this.handleLangSwitch.bind(this);
		this.footerRef = React.createRef();
	}

	componentDidMount() {
		this.footerRef.current.addEventListener('sbb-footer.language_switch', this.handleLangSwitch);
	}

	componentWillUnmount() {
		this.footerRef.current.removeEventListener('sbb-footer.language_switch', this.handleLangSwitch);
	}

	handleLangSwitch(evt) {
		this.props.setLanguage(evt.detail.language);

		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<sbb-webfonts></sbb-webfonts>
				<sbb-header language={this.props.language} items='{"de": [{ "title": "Fahrplan", "link": "#"}, { "title": "Abos & Billete", "link": "#"}, { "title": "Bahnhof & Services", "link": "#"}, { "title": "Geschäftskunden", "link": "#"}, { "title": "Freizeit & Ferien", "link": "#"}], "fr": [{ "title": "Horaire", "link": "#"}, { "title": "Abonnements et billets", "link": "#"}, { "title": "Gare et servicesa", "link": "#"}, { "title": "Clientèle commerciale", "link": "#"}, { "title": "Loisirs et vacances", "link": "#"}], "en": [{ "title": "Timetable", "link": "#"}, { "title": "Travelcards & tickets", "link": "#"}, { "title": "Station & services", "link": "#"}, { "title": "Business customers", "link": "#"}, { "title": "Leisure & holidays", "link": "#"}], "it": [{ "title": "Orario", "link": "#"}, { "title": "Abonamenti e biglietti", "link": "#"}, { "title": "Stazione e servizi", "link": "#"}, { "title": "Clientela aziendale", "link": "#"}, { "title": "Tempo libero e vacanze", "link": "#"}]}'></sbb-header>
				<sbb-timetable-search></sbb-timetable-search>
				<sbb-timetable-results></sbb-timetable-results>
				<sbb-homepage-main-teaser></sbb-homepage-main-teaser>
				<sbb-footer language={this.props.language} uselinks='false' ref={this.footerRef}></sbb-footer>
			</div>
		);
	}
}

App.propTypes = {
	language: PropTypes.string,
	setLanguage: PropTypes.func
};

export default App;
