import React from 'react'

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'

export const Home = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63ffec509f84491029866878.mockapi.io/items')
      .then((res) => res.json())
      .then((items) => {
        setItems(items)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 class="content__title">All pizzas</h2>
        <div class="content__items">
          {isLoading ?
            [...Array(10)].map((obj) => (
              <Skeleton />
            ))
            :
            items.map((obj) => (
              <PizzaBlock {...obj} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
