import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CardList } from '../../../components/Review/Card/CardList'
import { getReviewList } from '../../../actions/review'

class CardListContainer extends Component {
    // static propTypes = {
    //     reviews: PropTypes.array.isRequired,
    //     getReviewList : PropTypes.func.isRequired,
    //     itemPerRow: PropTypes.number,
    // }

    loadReviews = () => {
        this.props.getReviewList()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentDidMount() {
        this.loadReviews()    
    }

    render() {
        console.debug(this.props.reviews)
        return (
            <CardList
                itemPerRow={this.props.itemPerRow} 
                reviews={this.props.reviews} />
        )
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews
})

export default connect(
    mapStateToProps,
    { getReviewList: getReviewList }
)(CardListContainer)