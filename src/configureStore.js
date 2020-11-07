import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import createRootReducer from "./reducers";
import Epic from "./epics";

const configureStore = (preloadedState) => {
  // createEpicMiddlewarec會將epic函數轉為redux中間件
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(Epic);

  return store;
};

export default configureStore;
