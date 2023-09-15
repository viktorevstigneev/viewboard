import React from 'react';

import { ToggleButton } from './styles';
import './style.css';

const ThemeToggler = ({ theme, toggleTheme }) => {
	return (
		<ToggleButton onClick={toggleTheme}>
			
		</ToggleButton>
	);
};

export default ThemeToggler;
