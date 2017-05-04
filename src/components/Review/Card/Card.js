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
    return value/1000 + "K"
  else {
    return value/1000000 + "M"
  }
}

const dateFormatter = (value: number, unit: string, suffix: strin) => {
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
    const content =
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ultrices aliquam. Aenean quam nulla, sodales vitae tempor nec, facilisis eget nulla. Quisque neque est, suscipit quis nisl a, dictum tincidunt quam. Morbi et diam sollicitudin, posuere elit vel, pulvinar justo. Vivamus ut mattis erat, sed pharetra dolor. Sed ultricies felis id tincidunt sollicitudin. Sed dignissim fringilla dolor, in tempor justo efficitur in. Proin pellentesque quam nec pretium finibus. Duis ornare cursus lorem et suscipit.
    `

    const cover = "https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5858a1b9884272235a6a37e9/14822036862408990319.jpg"

    const stat = {view: 1250, share: 60}

    const owner = {
      profile_picture: 'https://scontent-kut2-1.xx.fbcdn.net/v/t1.0-9/18056643_10213721237130295_8812331829249477229_n.jpg?oh=6718f808c36cf718e74c3909c338f1f1&oe=597CFCCE',
      display_name : 'TeeForeverAlone',
    }

    const datetime_create = "2017-05-03T11:30:33+07:00"

    // <div className='col-md-5 col-sm-5 col-xs-5'>
    //   <div className={styles['profile']}>
    //     <img
    //       src={owner.profile_picture}
    //       className="img-rounded" />
    //     <a href="#">@{owner.display_name}</a>
    //   </div>
    // </div>

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
              <a href="#">@{owner.display_name}</a>
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
                Movies Topic is so Longggggggggggg
              </div>
              <TextTruncate
                line={4}
                truncateText="..."
                text={content} />
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
