import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import debounce from 'lodash.debounce'
import { setActiveSearch } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Search.module.scss'

const Search = () => {

  const { activeSearch } = useSelector((state) => state.filter);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(setActiveSearch(""));
  }, [])

  const onClose = () => {
    setActiveSearch("");
    setValue("");
    inputRef.current.focus();
  }


  const onInputChange = React.useCallback(
    debounce((e) => {
      dispatch(setActiveSearch(e.target.value));
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
