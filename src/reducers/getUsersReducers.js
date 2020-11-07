import { FETCH_USERS, FETCH_USERS_SUCCEED, FETCH_USERS_END } from "../actions";

const model = {
  users: [],
};

const getUsersReducers = (state = model, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        per_page: action.payload.per_page,
        isLoading: true,
      };
    case FETCH_USERS_SUCCEED:
      return {
        ...state,
        users: action.response,
      };
    case FETCH_USERS_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getUsersReducers;
