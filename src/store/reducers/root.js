import { combineReducers } from 'redux';

import user from './user';

import theme from './theme';

const root = combineReducers({
  user,
  theme,
});

export default root;
