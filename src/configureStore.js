import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import createRootReducer from './reducers'
import Epic from './epics'

const configureStore = preloadedState => {
    // createEpicMiddlewarec會將epic函數轉為redux中間件
    const epicMiddleware = createEpicMiddleware();

    // https://github.com/zalmoxisus/redux-devtools-extension
    // 將reducer傳入以創建一個store
    const store = createStore(
        createRootReducer(),
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(epicMiddleware)),
      );

    epicMiddleware.run(Epic)

    return store;
}

export default configureStore