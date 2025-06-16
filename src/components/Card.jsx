import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

export function Card({ imageSrc, title, alt }) {
  return (
    <div className={styles.card}>
      <img
        src={imageSrc}
        alt={alt || title}
        className={styles.image}
      />
      <div className={styles.title}>{title}</div>
    </div>
  )
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title:     PropTypes.string.isRequired,
  alt:       PropTypes.string
}