import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card'
import 'font-awesome/css/font-awesome.min.css'
import FontAwesome from 'react-fontawesome'
import {
    GET_REVIEWS_REQUEST, 
    GET_REVIEWS_SUCCESS, 
    GET_REVIEWS_FAILURE,
 } from '../../../constants/actionTypes'
 import styles from './CardList.css'

export const CardList = ({
    reviews,
    status
}) => { 
    return (
        <div className={styles['card-list']}>
            {
                reviews.map((review) => (
                    <Card
                        key={review.id}
                        review={review}/>
                ))
            }
            {
                status === GET_REVIEWS_SUCCESS ? 
                null :
                <FontAwesome
                    className={styles['load-icon']}
                    name='spinner'
                    size='2x'
                    spin
                    tag='i' />
            }
        </div>
    )
}

CardList.propTypes = {
    reviews: PropTypes.array.isRequired,
    status:PropTypes.string.isRequired,
}