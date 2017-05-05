import { 
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../constants/actionTypes'

const initialState = ['sss']

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_REVIEWS_REQUEST:
            return action
        case GET_REVIEWS_SUCCESS:
            return action
        case GET_REVIEWS_FAILURE:
            return action
        default:
            return state
    }
}