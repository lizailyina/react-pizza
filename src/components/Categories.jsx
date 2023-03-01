import React from 'react'

const categories = ["All", "kek", "Vegan", "Grill", "Hot", "Closed"]

export const Categories = () => {

  const [active, setActive] = React.useState(categories[0]);

  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li
            key={item}
            className={item === active ? "active" : ""}
            onClick={() => setActive(item)}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
