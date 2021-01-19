import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './Reducers'

const middlewares = [createLogger()];

export const store = createStore(
  rootReducer,
  applyMiddleware(
    ...middlewares
  )
)
