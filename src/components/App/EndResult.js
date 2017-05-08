import React from 'react'
import PropTypes from 'prop-types'
import styles from './EndResult.css'

export const EndResult = ({
    text='End of result'
}) => (
    <div className={styles['end-result']}>
        {text}
    </div>
)