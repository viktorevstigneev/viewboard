import React from 'react';

import { ToggleButton } from './styles';

const ThemeToggler = ({ theme, toggleTheme }) => {

	return (
		<>
			<ToggleButton onClick={toggleTheme}>
				{theme.darkMode ? "dark" : 'light'}
			</ToggleButton>
		</>
	);
};

export default ThemeToggler;
