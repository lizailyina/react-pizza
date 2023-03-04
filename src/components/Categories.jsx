import React from 'react'

const categories = ["All", "Meat", "Vegan", "Grill", "Hot", "Closed"]

export const Categories = ({ active, onClick }) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            className={item === categories[active] ? "active" : ""}
            onClick={() => onClick(index)}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
