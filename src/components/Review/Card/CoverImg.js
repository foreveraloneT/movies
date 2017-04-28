import React, { PropTypes } from 'react'
import styles from './CoverImg.css'

export const CoverImg = ({
  imgSrc,
}) => {
    return (
      <img
        src={imgSrc}
        className={styles['cover-img']} />
    )
}
