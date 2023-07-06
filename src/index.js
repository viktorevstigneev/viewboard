import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Normalize } from 'styled-normalize';
import CustomThemeProvider from './components/theme/CustomThemeProvider';
import rootReducer from './store/reducers/root';
import initialState from './store/initialState';
import sagaWatcher from './store/sagas/watcher';
import { LOCAL_STORAGE_KEY } from './constants';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(saga)));


saga.run(sagaWatcher);

store.subscribe(() => {
	const theme = store.getState().theme;
	if (!theme) return;

	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme));
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<CustomThemeProvider>
				<Normalize />
				<App />
			</CustomThemeProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
