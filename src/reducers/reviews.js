import { 
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
    console.debug(action)
    switch(action.type) {
        case GET_REVIEWS_REQUEST:
            return action.payload
        case GET_REVIEWS_SUCCESS:
            return action.payload
        case GET_REVIEWS_FAILURE:
            return action.payload
        default:
            return state
    }
}