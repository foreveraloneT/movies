import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card'

export const CardList = ({
    reviews,
    itemPerRow = 1,
}) => {
    const colSize = 12/itemPerRow  
    return (
        <div className="row">
            {
                reviews.map((review) => (
                    <div className={`col-md-${colSize} col-sm-${colSize} col-xs-12`}>
                        <Card
                            key={review.id}
                            review={review}/>
                    </div>
                ))
            }
        </div>
    )
}

CardList.propTypes = {
    reviews: PropTypes.array.isRequired,
    itemPerRow: PropTypes.number,
}