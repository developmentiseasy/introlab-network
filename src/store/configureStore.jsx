import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../backstage/reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
  const logger = createLogger()
  const reduxDT = window.__REDUX_DEVTOOLS_EXTENSION__

  const composedEnhancers = compose(
    applyMiddleware(
      thunk,
      logger
    ),
    reduxDT ? reduxDT() : f => f
  )

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )

  if (module.hot) {
    module.hot.accept('../backstage/reducers', () => {
      const nextRootReducer = require('../backstage/reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}