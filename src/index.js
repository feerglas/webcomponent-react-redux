import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import storeFactory from './model/store/store';
import defaultState from './model/store/defaultState';
import { defineCustomElements } from '@stauffacher/sbbpoc/dist/loader';

let store = storeFactory(defaultState);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);

defineCustomElements(window);
