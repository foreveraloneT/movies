import { 
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../constants/actionTypes'

const initialState = {
        action: 'none', 
        data: [],
    }

const getState = (action, data) => (
    {
        action,
        data,
    }
)

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_REVIEWS_REQUEST:
            return getState(action.type, [])
        case GET_REVIEWS_SUCCESS:
            return getState(action.type, action.payload)
        case GET_REVIEWS_FAILURE:
            return getState(action.type, [])
        default:
            return state
    }
}