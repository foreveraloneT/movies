import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card'

export const CardList = ({
    reviews,
}) => {

    return (
        <div className="row">
            {
                reviews.map((review) => (
                    <div className="col-md-4 col-sm-6">
                        <Card />
                    </div>
                ))
            }
        </div>
    )
}

CardList.propTypes = {
    reviews: PropTypes.array.isRequired
}