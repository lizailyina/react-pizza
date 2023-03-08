import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setActiveCategory } from '../redux/slices/filterSlice'

const categories = ["All", "Meat", "Vegan", "Grill", "Hot", "Closed"]

export const Categories = ({ activeCategory }) => {

  console.log(activeCategory);

  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            className={item === categories[activeCategory] ? "active" : ""}
            onClick={() => dispatch(setActiveCategory(index))}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
