import './App.css';
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './components/i18n/locales';
import { messages } from './components/i18n/messages';
import Header from './components/common/Header';
import Slider from './components/common/Slider'


const MainPage = lazy(() => import('./components/pages/MainPage'));

function App() {
	const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

	const handleChange = (e) => {
		setCurrentLocale(e.target.value);
		localStorage.setItem('locale', e.target.value);
	};
	function getInitialLocal() {
		const savedLocale = localStorage.getItem('locale');
		return savedLocale || LOCALES.ENGLISH;
	}
	return (
		<BrowserRouter>
			<IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
				<Header handleChange={handleChange} currentLocale={currentLocale} />
				<Suspense fallback={<Slider/>}>
					<Routes>
						<Route path="/" element={<MainPage />} />
					</Routes>
				</Suspense>
			</IntlProvider>
		</BrowserRouter>
	);
}

export default App;
