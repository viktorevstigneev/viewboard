import { LOCAL_STORAGE_KEY } from '../constants';
const persistedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
const isDarkMode = persistedTheme ? JSON.parse(persistedTheme).darkMode : false;

const initialState = {
	theme: {
		darkMode: isDarkMode,
	},
	user: {
		data: [],
		loading: false,
		error: {},
	}
};

export default initialState;
