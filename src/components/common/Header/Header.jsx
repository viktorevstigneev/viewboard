import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import './style.css';

import { LOCALES } from '../../i18n/locales';

import ThemeToggler from '../../theme/ThemeToggler';
const Header = ({ handleChange, currentLocale, theme }) => {
	const languages = [
		{ name: 'English', code: LOCALES.ENGLISH },
		{ name: 'Русский', code: LOCALES.RUSSIAN },
	];

	const [isOpen, setIsopne] = useState(false);
	console.log('isOpen: ', isOpen);

	return (
		<>
			<button
				className="menu_btn"
				onClick={() => {
					setIsopne(true);
				}}
				style={{ display: isOpen ? 'none' : 'block' }}
			>
				<div></div>
				<div></div>
				<div></div>
			</button>
			<header className="header" style={{ display: isOpen ? 'block' : 'none', left: isOpen ? '0' : '-800px' }}>
				<div className="header__container">
					<button
						className="menu_btn-close"
						onClick={() => {
							setIsopne(false);
						}}
					>
						X
					</button>
					<nav className="header__nav">
						<Link className="header__link" to="/">
							<FormattedMessage id="home_link" />
						</Link>

						<div className="header__link">
							<select className="header__select" onChange={handleChange} value={currentLocale}>
								{languages.map(({ name, code }) => (
									<option className="header__option" key={code} value={code}>
										{name}
									</option>
								))}
							</select>
						</div>

						<ThemeToggler />
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
