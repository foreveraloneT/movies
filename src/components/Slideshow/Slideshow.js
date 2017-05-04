import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Slideshow.css'
import times from 'lodash/times'


export const Slideshow = ({
  imgSet,
  position,
  setPosition,
}) => {

  const leftButtStyles = classNames(
    'glyphicon glyphicon-chevron-left',
    styles['arrow-button'],
    styles['left-button'],
  )

  const rightButtStyles = classNames(
    'glyphicon glyphicon-chevron-right',
    styles['arrow-button'],
    styles['right-button'],
  )

  const generateCircleButton = (number, position) => {
    return (
     times(number).map((i) => {
      let circleStyles = (i != position-1) ? 
        styles['circle-button'] :
        classNames(styles['circle-button'], styles['active'])
      return (
        <span 
          className={circleStyles}
          onClick={() => setPosition(i+1)} >
        </span>
      )
     })
    )
  }

  const generateSlide = (imgSet, position) => (
    times(imgSet.length).map((i) => {
      if (position == i + 1)
        return (
          <img src={imgSet[i]} />
        )
      return (
        <img src={imgSet[i]} className={styles['hidden']} />
      )
    })
  )


  return (
    <div className={styles['slideshow']}>
      {generateSlide(imgSet, position)}

      <div className={styles['menu']}>
        {generateCircleButton(imgSet.length, position)}
      </div>

      <div className={styles['arrow']}>
        <span 
          className={leftButtStyles}
          onClick={ () => setPosition(position-1) } >
        </span>
        <span 
          className={rightButtStyles}
          onClick={ () => setPosition(position+1)} >
        </span>
      </div>

    </div>
  )
}

Slideshow.propTypes = {
  imgSet : PropTypes.array.isRequired,
  position: PropTypes.number.isRequired,
  setPosition: PropTypes.func.isRequired,
}
