import {
  FETCH_ONE_USER,
  FETCH_ONE_USER_SUCCEED,
  FETCH_ONE_USER_END,
} from "../actions";

const model = {
  userData: {},
};

const getOneUserReducers = (state = model, action) => {
  switch (action.type) {
    case FETCH_ONE_USER:
      return {
        ...state,
        username: action.payload.username,
        isLoading: true,
      };
    case FETCH_ONE_USER_SUCCEED:
      return {
        ...state,
        userData: action.response,
      };
    case FETCH_ONE_USER_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getOneUserReducers;
