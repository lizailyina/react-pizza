import React from 'react'
import { useDispatch } from 'react-redux'

import { setActivePage } from '../../redux/slices/filterSlice';

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import styles from './Pagination.module.scss';

type PaginationProps = {
  activePage: number;
};

const Pagination: React.FC<PaginationProps> = ({ activePage }) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.button} onClick={() => dispatch(setActivePage(Math.max(activePage - 1, 0)))}>
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
      <div className={styles.button} onClick={() => dispatch(setActivePage(Math.min(activePage + 1, 2)))} >
        <MdKeyboardArrowRight />
      </div>
    </div >
  )
}

export default Pagination;
