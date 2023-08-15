import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../../constants';

export const darkTheme = {
	skeleton: '#d3d3d3',
	cardImgBg: '#2f3440',
	cardBg: '#242831',
	body: COLORS.DARK_THEME_BACKGROUND_COLOR,
	text: COLORS.DARK_THEME_TEXT_COLOR,
	headerBackground: COLORS.DARK_THEME_HEADER_COLOR,
	borderColor: 'rgba(255, 255, 255, 0.2)',
};

export const lightTheme = {
  skeleton: "#d3d3d3",
  cardImgBg: "#f5f5f7",
  cardBg: "#d3d3d3",
  body: COLORS.LIGHT_THEME_BACKGROUND_COLOR,
  text: COLORS.LIGHT_THEME_TEXT_COLOR,
  headerBackground: COLORS.LIGHT_THEME_HEADER_COLOR,
  borderColor: "rgba(26, 30, 33, 0.1)",
};

export const GlobalStyles = createGlobalStyle`
html{
	min-height: 100%;
	height: 100%;
}
body{
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, sans-serif;
  transition: all 0.50s linear;
	min-height: 100%;
	height: 100%;

	font-size: 14px;
	line-height: 17px;
}

	#root{
		min-height: 100%;
		height: 100%;
		&>div{
			min-height: 100%;
			height: 100%;
		}
	}
`;
