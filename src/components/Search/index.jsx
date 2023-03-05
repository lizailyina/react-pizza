import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

const Search = () => {

  const { setActiveSearch } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const onClose = () => {
    setActiveSearch("");
    setValue("");
    inputRef.current.focus();
  }


  const onInputChange = React.useCallback(
    debounce((e) => {
      setActiveSearch(e.target.value);
    }, 500), [])


  return (
    <div className={styles.root}>
      <AiOutlineSearch onClick={() => inputRef.current.focus()} className={styles.search} />
      <input ref={inputRef}
        value={value}
        onChange={(e) => { setValue(e.target.value); onInputChange(e) }}
        placeholder='Search for pizza...' />
      <IoMdClose onClick={onClose} className={styles.button} />
    </div>
  )
}

export default Search;
