import { createStore, applyMiddleware } from 'redux'
import { createLogger }                 from 'redux-logger'
import thunkMiddleware                  from 'redux-thunk'
import rootReducer                      from 'Reducers'

const middleware = [ thunkMiddleware ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
}

export default configureStore
