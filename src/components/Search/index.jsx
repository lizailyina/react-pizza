import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { SearchContext } from '../../App'

import styles from './Search.module.scss'

const Search = () => {

  const { activeSearch, setActiveSearch } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.search} />
      <input value={activeSearch} onChange={(e) => setActiveSearch(e.target.value)} placeholder='Search for pizza...' />
      <IoMdClose onClick={() => setActiveSearch("")} className={styles.button} />
    </div>
  )
}

export default Search;
