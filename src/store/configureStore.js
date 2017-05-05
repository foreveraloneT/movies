import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'

export default () => {
    const middlewares = [apiMiddleware]
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
    return store
}