import React, { PropTypes } from 'react'
import styles from './Slideshow.css'


export const Slideshow = ({
  imgSet,
  position,
}) => {
  return (
    <div className={styles['slideshow']}>
      <img src="https://www.w3schools.com/w3css/img_nature_wide.jpg" />

      <div className={styles['menu']}>
        <span className={styles['circle-button']}></span>
        <span className={styles['circle-button']}></span>
        <span className={styles['circle-button']}></span>
      </div>
    </div>
  )
}
