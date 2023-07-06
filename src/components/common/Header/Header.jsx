import React from 'react';
import { Link,  } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


import './style.css';


import { LOCALES } from '../../i18n/locales';


import ThemeToggler from '../../theme/ThemeToggler';
const Header = ({ handleChange, currentLocale, theme }) => {

	
	const languages = [
		{ name: 'English', code: LOCALES.ENGLISH },
		{ name: 'Русский', code: LOCALES.RUSSIAN },
	];

	return (
		<header className="header">
			<div className="header__container">
				

				<div className="header__nav-left">
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
				</div>
			</div>
		</header>
	);
};

export default Header;
