import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import styles from './Search.module.scss'

const index = () => {
  console.log(styles);
  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.search} />
      <input placeholder='Search for pizza...' />
      <IoMdClose className={styles.button} />
    </div>
  )
}

export default index;
