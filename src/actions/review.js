import { CALL_API } from 'redux-api-middleware'
import { REVIEW_ENDPOINT } from '../constants/endpoints'
import { 
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../constants/actionTypes'

export const getReviewList = () => ({
    [CALL_API]: {
        endpoint: REVIEW_ENDPOINT,
        method: 'GET',
        types: [GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE],
    }
})