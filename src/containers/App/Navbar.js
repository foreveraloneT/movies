import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from '../../components/App/Navbar'
import { reFreshReviewList } from '../../actions/review'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'

class NavbarContainer extends Component {
    static propTypes = {
        refreshReviews: PropTypes.func.isRequired,
    }
    
    state = {
        current: ''
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

    clickAbout = () => {
        void(0);
    }

    clickHome = () => {
        this.reloadReviews()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    render() {
        console.debug(this.props.location.pathname)
        return (
            <Navbar 
                clickHome={this.clickHome}
                clickAbout={this.clickAbout}
                pathname={this.props.location.pathname} />
        )
    }
}

export default compose(
    withRouter,
    connect(null, { refreshReviews: reFreshReviewList }),
)(NavbarContainer)