import React from 'react'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import styles from './Pagination.module.scss';

const index = ({ activePage, setActivePage }) => {

  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <MdKeyboardArrowLeft />
      </div>
      <ul>
        {
          [...Array(3)].map((_, i) =>
            <li className={activePage === i ? styles.active : ""} onClick={() => setActivePage(i)} key={i}>
              {i + 1}
            </li>)
        }
      </ul>
      <div className={styles.button}>
        <MdKeyboardArrowRight />
      </div>
    </div >
  )
}

export default index;
