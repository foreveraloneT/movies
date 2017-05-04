import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Slideshow } from '../../components/Slideshow/Slideshow'

export default class SlideshowContainer extends Component {
    static propTypes = {
        imgSet: PropTypes.array.isRequired,
    }
    
    state = {
        position: 1,
    }

    autoTime = 10

    setPosition = (position) => {
        const max = this.props.imgSet.length
        if (position > max)
            position = 1
        if (position < 1)
            position = max 
        this.setState({position})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return ! (this.state.position == nextState.position)
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.setPosition(this.state.position+1),
            this.autoTime*1000
        )
    }
    
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <Slideshow 
                imgSet={this.props.imgSet} 
                position={this.state.position}
                setPosition={this.setPosition} />
        )
    }
}