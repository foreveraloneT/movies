import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CardList } from '../../../components/Review/Card/CardList'
import { getReviewList } from '../../../actions/review'

class CardListContainer extends Component {
    static propTypes = {
        reviews: PropTypes.array.isRequired,
        status:PropTypes.string.isRequired,
        getReviewList : PropTypes.func.isRequired,
        newCount: PropTypes.number.isRequired,
    }

    limit = 3

    loadReviews = (params={}) => {
        this.props.getReviewList(params)
    }

    loadNextReviews = () => {
        console.debug(this.props.newCount)
        if (window.scrollY + innerHeight >= document.body.offsetHeight && 
            this.props.newCount >= this.limit) {
            const params = {
                _start: this.props.reviews.length,
                _limit: this.limit,
                _sort: 'datetime_create',
                _order: 'DESC', 
            }
            this.loadReviews(params)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.reviews !== nextProps.reviews ||
               this.props.status !== nextProps.status
    }

    componentDidMount() {
        const params = {
            _start: this.props.reviews.length,
            _limit: this.limit,
            _sort: 'datetime_create',
            _order: 'DESC', 
        }
        this.loadReviews(params)

        window.addEventListener("scroll", this.loadNextReviews)    
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.loadNextReviews)
    }

    render() {
        const {reviews, status} = this.props
        console.debug(status)
        return (
            <CardList
                reviews={reviews} 
                status={status} />
        )

    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews.data,
    status: state.reviews.action,
    newCount: state.reviews.newCount,
})

export default connect(
    mapStateToProps,
    { getReviewList: getReviewList }
)(CardListContainer)