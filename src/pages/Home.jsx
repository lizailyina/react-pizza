import React from 'react'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import Pagination from '../components/Pagination'
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux'
import { setState } from '../redux/slices/filterSlice'


export const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { activeCategory, activePage, activeSortType, sortDirection } = useSelector((state) => state.filter);

  const { activeSearch } = React.useContext(SearchContext);

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  React.useEffect(() => {
    if (isSearch.current) {
      setIsLoading(true);
      let link = `https://63ffec509f84491029866878.mockapi.io/items?p=${activePage + 1}&l=8&sortBy=${activeSortType}&order=${sortDirection}`;
      if (activeCategory > 0) {
        link += `&category=${activeCategory}`;
      }
      if (activeSearch) {
        link += `&title=${activeSearch}`
      }
      axios.get(link)
        .then((res) => {
          setItems(res.data)
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [activePage, activeSearch, activeSortType, activeCategory, sortDirection])

  React.useEffect(() => {
    if (isMounted.current) {
      const query = '?' + qs.stringify({
        activePage,
        activeCategory,
        activeSortType,
        sortDirection
      })
      navigate(query);
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
          <Categories />
          <Sort />
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
        <Pagination />
      </div>
    </div>
  )
}
