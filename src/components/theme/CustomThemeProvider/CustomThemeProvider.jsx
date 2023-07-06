import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from './Themes';

const CustomThemeProvider = ({ theme, children }) => {

	return (
		<ThemeProvider theme={theme.darkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

CustomThemeProvider.prototypes = {
	theme: PropTypes.object,
	children: PropTypes.array,
};

export default CustomThemeProvider;
