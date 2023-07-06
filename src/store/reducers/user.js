import initialState from '../initialState';
import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
} from "../constants";

const user = (state = initialState.user, action) => {
	switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_CURRENT_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default user;
