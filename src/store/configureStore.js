import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'
import ENV from '../environment' 

export default () => {
    const middlewares = [apiMiddleware]
    
    if (ENV === "development")
        middlewares.push(createLogger())

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
    return store
}