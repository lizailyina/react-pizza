import React from 'react'
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { setActiveSortType, setSortDirection } from '../redux/slices/filterSlice'

const sortTypes = ['rating', 'price', 'title']

type SortItem = {
  activeSortType: string,
  sortDirection: string
}

export const Sort: React.FC<SortItem> = ({ activeSortType, sortDirection }) => {

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (sortRef.current !== null && !e.composedPath().includes(sortRef.current)) {
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
              <FaSortAmountDown />
              :
              <FaSortAmountUp />
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
