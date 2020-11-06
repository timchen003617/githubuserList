import { combineReducers } from 'redux'
import getUsersReducers from './getUsersReducers'


const createRootReducer = () => {
    return combineReducers({
        userList: getUsersReducers
    })
}


export default createRootReducer