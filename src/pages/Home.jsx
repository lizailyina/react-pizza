import React from 'react'

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'

export const Home = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSortType, setActiveSortType] = React.useState('rating')



  React.useEffect(() => {
    setIsLoading(true);
    let link = `https://63ffec509f84491029866878.mockapi.io/items?sortBy=${activeSortType}`;
    if (activeCategory > 0) {
      link += `&category=${activeCategory}`;
    }
    console.log(link)
    fetch(link)
      .then((res) => res.json())
      .then((items) => {
        setItems(items)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [activeSortType, activeCategory])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories active={activeCategory} onClick={(val) => setActiveCategory(val)} />
          <Sort active={activeSortType} onClick={(val) => setActiveSortType(val)} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {isLoading ?
            [...Array(10)].map((_, index) => (
              <Skeleton key={index} />
            ))
            :
            items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
