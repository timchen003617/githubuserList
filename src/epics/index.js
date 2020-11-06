
import { merge, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { combineEpics } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { fetchUsersSucceed } from '../actions'
const apiurl = 'https://api.github.com'

const getUserList = (action$) => 
    action$.ofType('FETCH_USERS').pipe(
    mergeMap(({payload, callback}) => {
        return ajax.getJSON(`${apiurl}/users?per_page=${payload.per_page}`).pipe(
            mergeMap(response => {
                if(callback) callback(response)
                return of(fetchUsersSucceed(response))
            })
        )
    })
  );

export default combineEpics(getUserList);