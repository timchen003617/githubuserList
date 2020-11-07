export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCEED = "FETCH_USERS_SUCCEED";
export const FETCH_USERS_END = "FETCH_USERS_END";
export const FETCH_ONE_USER = "FETCH_ONE_USER";
export const FETCH_ONE_USER_SUCCEED = "FETCH_ONE_USER_SUCCEED";
export const FETCH_ONE_USER_END = "FETCH_ONE_USER_END";

export const fetchUsers = payload => ({
  type: FETCH_USERS,
  payload
});

export const fetchUsersSucceed = (response) => ({
  type: FETCH_USERS_SUCCEED,
  response: response
});

export const fetchUsersEnd = () => ({
  type: FETCH_USERS_END
});

export const fetchOneUser = payload => ({
  type: FETCH_ONE_USER,
  payload
});

export const fetchOneUserSucceed = response => ({
  type: FETCH_ONE_USER_SUCCEED,
  response: response
});

export const fetchOneUserEnd = () => ({
  type: FETCH_ONE_USER_END
});
