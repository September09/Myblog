/**
 * Created by september on 2018/6/7.
 */

import { createStore, applyMiddleware, compose } from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import reducer from "../reducers/index"

const configureStore = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        createLogger)
    )
  )
}

export default configureStore
