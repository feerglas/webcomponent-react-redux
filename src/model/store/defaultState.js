// autocomplete defaults
const autocompleteDefaultStations = [
	{
		label: 'Bern',
		id: 8507000
	},
	{
		label: 'Zürich HB',
		id: 8503000
	},
	{
		label: 'Fribourg',
		id: 178
	},
	{
		label: 'Basel',
		id: 22
	},
	{
		label: 'Genève',
		id: 8501008
	}
];

const state = {
	language: 'de',
	results: [],
	title: {
		from: '',
		to: ''
	},
	autocomplete: {
		autocompleteOrigin: JSON.stringify(autocompleteDefaultStations),
		autocompleteDestination: JSON.stringify(autocompleteDefaultStations)
	},
	origin: {},
	destination: {}
};

export default state;
