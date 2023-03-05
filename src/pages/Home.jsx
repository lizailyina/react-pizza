import React from 'react'

import Pagination from '../components/Pagination'
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'
import { SearchContext } from '../App';

export const Home = () => {

  const { activeSearch } = React.useContext(SearchContext);

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSortType, setActiveSortType] = React.useState('rating');
  const [sortDirection, setSortDirection] = React.useState('asc');
  const [activePage, setActivePage] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    let link = `https://63ffec509f84491029866878.mockapi.io/items?p=${activePage + 1}&l=8&sortBy=${activeSortType}&order=${sortDirection}`;
    if (activeCategory > 0) {
      link += `&category=${activeCategory}`;
    }
    if (activeSearch) {
      link += `&title=${activeSearch}`
    }
    console.log(link)
    fetch(link)
      .then((res) => res.json())
      .then((items) => {
        setItems(items)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [activePage, activeSearch, activeSortType, activeCategory, sortDirection])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories active={activeCategory} onClick={(val) => setActiveCategory(val)} />
          <Sort active={activeSortType}
            onClickType={(val) => setActiveSortType(val)}
            onClickDirection={() => setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
            sortDirection={sortDirection} />
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
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </div>
    </div>
  )
}
