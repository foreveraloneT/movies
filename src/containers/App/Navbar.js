import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from '../../components/App/Navbar'
import { reFreshReviewList } from '../../actions/review'
import { connect } from 'react-redux'

class NavbarContainer extends Component {
    static propTypes = {
        refreshReviews: PropTypes.func.isRequired,
    }
    
    state = {
        current: 'home'
    }

    reloadReviews = () => {
        const params = {
            _start: 0,
            _limit: 3,
            _sort: 'datetime_create',
            _order: 'DESC', 
        }
        this.props.refreshReviews(params)
    }

    clickMenu = (menu) => {
        this.setState({current: menu})
    }

    clickAbout = () => {
        this.clickMenu('about')
    }

    clickHome = () => {
        this.clickMenu('home')
        this.reloadReviews()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return ! (this.state.current == nextState.current)
    }

    render() {
        console.debug(this.state.current)
        return (
            <Navbar 
                clickHome={this.clickHome}
                clickAbout={this.clickAbout}
                current={this.state.current} />
        )
    }
}

export default connect(
    null,
    { refreshReviews: reFreshReviewList }   
)(NavbarContainer)