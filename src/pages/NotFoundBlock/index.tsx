import React from 'react'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <h2 className={styles.root}>
      😔
      <br />
      <br />
      This page does not exist.
    </h2>
  )
}
