import React from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import Pagination from '../components/Pagination'
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter, setState } from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'


export const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { activeSearch, activeCategory, activePage, activeSortType, sortDirection } = useSelector(selectFilter);
  //@ts-ignore
  const { items, status } = useSelector((state) => state.pizza);


  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  React.useEffect(() => {
    if (isSearch.current || !window.location.search) {
      //@ts-ignore
      dispatch(fetchPizzas({ activePage, activeSearch, activeSortType, activeCategory, sortDirection }));
    }
  }, [isSearch, activePage, activeSearch, activeSortType, activeCategory, sortDirection])

  React.useEffect(() => {
    if (isMounted.current) {
      if (!(activePage === 0
        && activeCategory === 0
        && activeSortType === 'rating'
        && sortDirection === 'desc')) {
        const query = '?' + qs.stringify({
          activePage,
          activeCategory,
          activeSortType,
          sortDirection
        })
        navigate(query);
      } else {
        navigate('/')
      }
    }
    isMounted.current = true;
  }, [activePage, activeSearch, activeSortType, activeCategory, sortDirection, navigate])

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setState(params));
    }
    isSearch.current = true;
  }, [])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategory={activeCategory} />
          <Sort activeSortType={activeSortType} sortDirection={sortDirection} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        {
          status === 'error' ?
            (<div className="content__error">
              <h2>Error occured 😕</h2>
              <p>
                Sadly we cannot show you pizzas this time due to server error<br />
                Please, try agiain later.
              </p>
            </div>)
            :
            (<div className="content__items">
              {status === 'loading' ?
                [...Array(10)].map((_, index) => (
                  <Skeleton key={index} />
                ))
                :
                items.map((obj: any) => (
                  <PizzaBlock key={obj.id} {...obj} />
                ))
              }
            </div>
            )
        }
        < Pagination activePage={activePage} />
      </div>
    </div>
  )
}
