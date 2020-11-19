import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { FETCH_USERS, FETCH_ONE_USER } from "../actions";
import {
  fetchUsersSucceed,
  fetchUsersEnd,
  fetchOneUserSucceed,
  fetchOneUserEnd,
} from "../actions";
const apiurl = "https://api.github.com";

const getUserList = (action$) =>
  action$.ofType(FETCH_USERS).pipe(
    mergeMap(({ payload }) => {
      return ajax.getJSON(`${apiurl}/users?per_page=${payload.per_page}`).pipe(
        mergeMap((response) => {
          return of(fetchUsersSucceed(response), fetchUsersEnd());
        })
      );
    })
  );

const getOneUser = (action$) =>
  action$.ofType(FETCH_ONE_USER).pipe(
    mergeMap(({ payload }) => {
      return ajax.getJSON(`${apiurl}/users/${payload.username}`).pipe(
        mergeMap((response) => {
          return of(fetchOneUserSucceed(response), fetchOneUserEnd());
        })
      );
    })
  );

export default combineEpics(getUserList, getOneUser);
