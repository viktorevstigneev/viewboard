import initialState from '../initialState';
import { TOGGLE_THEME } from '../constants';

const theme = (state = initialState.theme, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				darkMode: !state.darkMode,
			};
		default:
			return state;
	}
};

export default theme;
