
const model = {
    users: [],
}

const getUsersReducers = (state = model, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state, per_page: action.payload.per_page
            }
        case 'FETCHUSERSSUCCEED':
            return {
                ...state,
                users: action.response
            }   
        default:
            return state
    }
}

export default getUsersReducers