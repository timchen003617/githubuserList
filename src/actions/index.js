const FETCH_USERS = 'FETCH_USERS'
const FETCHUSERSSUCCEED = 'FETCHUSERSSUCCEED'

export const fetchUsers = (payload, callback) => ({
    type: FETCH_USERS,
    payload,
    callback
})

export const fetchUsersSucceed = (response) => ({
    type: FETCHUSERSSUCCEED,
    response: response
})