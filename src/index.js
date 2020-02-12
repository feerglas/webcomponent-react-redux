import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import storeFactory from './model/store/store';
import defaultState from './model/store/defaultState';
import { defineCustomElements } from 'feerglassbbpoc/dist/loader';
import * as serviceWorker from './serviceWorker';

let store = storeFactory(defaultState);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);

defineCustomElements(window);

serviceWorker.register();
