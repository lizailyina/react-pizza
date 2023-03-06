import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'

import { setActiveSortType, setSortDirection } from '../redux/slices/filterSlice'

const sortTypes = ['rating', 'price', 'title']

export const Sort = () => {


  const { activeSortType, sortDirection } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();

  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [])

  return (
    <div className="sort" ref={sortRef}>
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
