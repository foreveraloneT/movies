import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardList } from '../../../components/Review/Card/CardList'

export default class CardListContainer extends Component {
    // static propTypes = {

    // }

    state = {
        reviews: [],
    }

    loadReviews = () => {
        this.setState({reviews: [1,2,3,4,5,6,7,8]})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentDidMount() {
        this.loadReviews()    
    }

    render() {
        return (
            <CardList 
                reviews={this.state.reviews} />
        )
    }
}