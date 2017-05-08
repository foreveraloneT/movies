import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.css'
import { CoverImg } from './CoverImg'
import TextTruncate from 'react-text-truncate'
import TimeAgo from 'react-timeago'

const statTranform = (value) => {
  if (value < 1000)
    return value
  if (value < 1000000)
    return Math.floor(value/1000) + "K"
  else {
    return Math.floor(value/1000000) + "M"
  }
}

const dateFormatter = (value, unit, suffix) => {
  // const shortUnit = {
  //   'second' : 'sec',
  //   'minute' : 'min',
  //   'hour'   : 'hr',
  //   'day'    : 'day',
  //   'week'   : 'week',
  //   'month'  : 'month',
  //   'year'   : 'yr',
  // }
  // unit = shortUnit[unit];
  if (value !== 1) {
    unit += 's'
  }
  return value + ' ' + unit + ' ' + suffix
}

export const Card = ({
  review,
}) => {
    const { id, topic, content_no_tag, cover, owner, stat, datetime_create } = review
    return (
      <div className={styles['card-review']}>
        <a href="#"><CoverImg imgSrc={cover} /></a>

        <div className={styles['profile']}>
          <div className={styles['profile-picture']}>
            <img
              src={owner.profile_picture}
              className="img-rounded" />
          </div>
          <div className={styles['profile-detail']}>
            <div className={styles['display_name']}>
              <a href="#">@{owner.id_name}</a>
            </div>
            <div className={styles['datetime']}>
              <span className="glyphicon glyphicon-time"></span> <TimeAgo date={datetime_create} formatter={dateFormatter} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className='col-md-12 col-sm-12 col-xs-12'>
            <article>
              <div className={styles['topic']}>
                {topic}
              </div>
              <TextTruncate
                line={2}
                truncateText="..."
                text={content_no_tag} 
                textTruncateChild={<a href="#">See More</a>} />
            </article>
            <div className={styles['stat']}>
              <span className="glyphicon glyphicon-eye-open"></span> {statTranform(stat.view)}
              <span className="glyphicon glyphicon-share"></span> {statTranform(stat.share)}
            </div>
          </div>
        </div>

        <div className="row">
          <div className='col-md-12'>
            <div className={styles['tag']}>

            </div>
          </div>
        </div>
      </div>
    )
}
