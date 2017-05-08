import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card'
import 'font-awesome/css/font-awesome.min.css'
import FontAwesome from 'react-fontawesome'
import styles from './CardList.css'
import { EndResult } from '../../App/EndResult'

export const CardList = ({
    reviews,
    status,
    newCount,
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
                status === 'success' ? 
                null :
                <FontAwesome
                    className={styles['load-icon']}
                    name='circle-o-notch'
                    size='2x'
                    spin
                    tag='i' /> 
            }
            {
                status === 'success' && newCount == 0 ?
                <EndResult text='End of result'/> : 
                null
            }
        </div>
    )
}

CardList.propTypes = {
    reviews: PropTypes.array.isRequired,
    status:PropTypes.string.isRequired,
    newCount:PropTypes.number.isRequired,
}