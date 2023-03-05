import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setActivePage } from '../../redux/slices/filterSlice';

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import styles from './Pagination.module.scss';

const Pagination = () => {

  const { activePage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <MdKeyboardArrowLeft />
      </div>
      <ul>
        {
          [...Array(3)].map((_, i) =>
            <li className={activePage === i ? styles.active : ""} onClick={() => dispatch(setActivePage(i))} key={i}>
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

export default Pagination;
