import { CALL_API } from 'redux-api-middleware'
import { REVIEW_ENDPOINT } from '../constants/endpoints'
import { 
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../constants/actionTypes'

const getParamsQuery = (params = {}) => (
        params == {} ? '' :
        Object.keys(params).reduce((query, param) => (
             `${query}${param}=${params[param]}&`
        ), '?').slice(0, -1)
)

export const getReviewList = (params = {}) => ({
    [CALL_API]: {
        endpoint: REVIEW_ENDPOINT + getParamsQuery(params),
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
        types: [GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE],
    }
})