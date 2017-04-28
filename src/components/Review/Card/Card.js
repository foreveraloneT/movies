import React, { PropTypes } from 'react'
import styles from './Card.css'
import { CoverImg } from './CoverImg'

export const Card = ({
  review,
}) => {
    return (
      <div className={styles['card-review']}>
        <CoverImg imgSrc="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5858a1b9884272235a6a37e9/14822036862408990319.jpg" />
      </div>
    )
}
