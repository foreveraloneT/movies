import { 
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../constants/actionTypes'

const initialState = {
        action: 'none', 
        data: [],
        newCount: [],
    }

const getState = (action, data, newCount) => (
    {
        action,
        data,
        newCount,
    }
)

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_REVIEWS_REQUEST:
            return getState(GET_REVIEWS_REQUEST, state.data, 0)
        case GET_REVIEWS_SUCCESS:
            return getState(GET_REVIEWS_SUCCESS, state.data.concat(action.payload), action.payload.length)
        case GET_REVIEWS_FAILURE:
            return getState(GET_REVIEWS_FAILURE, state.data, 0)
        default:
            return state
    }
}