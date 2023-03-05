import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import styles from './Search.module.scss'

const index = ({ activeSearch, setActiveSearch }) => {
  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.search} />
      <input value={activeSearch} onChange={(e) => setActiveSearch(e.target.value)} placeholder='Search for pizza...' />
      <IoMdClose className={styles.button} />
    </div>
  )
}

export default index;
