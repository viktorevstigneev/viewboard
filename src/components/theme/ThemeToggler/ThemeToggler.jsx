import React from 'react';

import { ToggleButton } from './styles';
import './style.css';

const ThemeToggler = ({ theme, toggleTheme }) => {
	return (
		<>
			<ToggleButton>
				{/* {theme.darkMode ? 'dark' : 'light'} */}
				<div className="toggleWrapper">
					<input onClick={toggleTheme} type="checkbox" className="dn" id="dn" checked={theme.darkMode} />
					<label for="dn" className="toggle">
						<span className="toggle__handler">
							<span className="crater crater--1"></span>
							<span className="crater crater--2"></span>
							<span className="crater crater--3"></span>
						</span>
						<span className="star star--1"></span>
						<span className="star star--2"></span>
						<span className="star star--3"></span>
						<span className="star star--4"></span>
						<span className="star star--5"></span>
						<span className="star star--6"></span>
					</label>
				</div>
			</ToggleButton>
		</>
	);
};

export default ThemeToggler;
