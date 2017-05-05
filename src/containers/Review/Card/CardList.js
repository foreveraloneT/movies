import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CardList } from '../../../components/Review/Card/CardList'
import { getReviewList } from '../../../actions/review'

class CardListContainer extends Component {
    static propTypes = {
        reviews: PropTypes.array.isRequired,
        getReviewList : PropTypes.func.isRequired,
        itemPerRow: PropTypes.number,
    }

    loadReviews = () => {
        this.props.getReviewList()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.reviews !== nextProps.reviews
    }

    componentDidMount() {
        this.loadReviews()    
    }

    render() {
        const {itemPerRow, reviews} = this.props
        return (
            <CardList
                itemPerRow={itemPerRow} 
                reviews={reviews} />
        )
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews.data
})

export default connect(
    mapStateToProps,
    { getReviewList: getReviewList }
)(CardListContainer)