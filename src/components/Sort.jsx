import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const sortTypes = ['rating', 'price', 'title']

export const Sort = ({ active, onClickType, onClickDirection, sortDirection }) => {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="sort">
      <div className="sort__label">
        <div onClick={() => onClickDirection()}>
          {
            sortDirection == 'desc' ?
              <TiArrowSortedDown />
              :
              <TiArrowSortedUp />
          }
        </div>
        <b>Sort by:</b>
        <span onClick={() => setOpen((prev) => !prev)}>{active}</span>
      </div>
      {open && <div className="sort__popup">
        <ul>
          {
            sortTypes.map((item) => (
              <li key={item}
                className={active === item ? "active" : ""}
                onClick={() => onClickType(item)}>{item}</li>
            ))
          }
        </ul>
      </div>}
    </div >
  )
}
