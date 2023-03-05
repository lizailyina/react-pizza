import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'

import { setActiveSortType, setSortDirection } from '../redux/slices/filterSlice'

const sortTypes = ['rating', 'price', 'title']

export const Sort = () => {

  const { activeSortType, sortDirection } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  return (
    <div className="sort">
      <div className="sort__label">
        <div onClick={() => dispatch(setSortDirection())}>
          {
            sortDirection === 'desc' ?
              <TiArrowSortedDown />
              :
              <TiArrowSortedUp />
          }
        </div>
        <b>Sort by:</b>
        <span onClick={() => setOpen((prev) => !prev)}>{activeSortType}</span>
      </div>
      {open && <div className="sort__popup">
        <ul>
          {
            sortTypes.map((item) => (
              <li key={item}
                className={activeSortType === item ? "active" : ""}
                onClick={() => { dispatch(setActiveSortType(item)); setOpen(false); }}>{item}</li>
            ))
          }
        </ul>
      </div>}
    </div >
  )
}
