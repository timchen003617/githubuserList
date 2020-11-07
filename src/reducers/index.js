import { combineReducers } from 'redux'
import getUsersReducers from './getUsersReducers'
import getOneUserReducers from './getOneUserReducers'

const createRootReducer = () => {
    return combineReducers({
        userList: getUsersReducers,
        oneuser: getOneUserReducers
    })
}


export default createRootReducer