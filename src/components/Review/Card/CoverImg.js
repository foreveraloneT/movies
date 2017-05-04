import React from 'react'
import PropTypes from 'prop-types'
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

CoverImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}
