import './scss/app.scss';
import { Header } from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { NotFoundBlock } from './pages/NotFoundBlock';
import { CartEmpty } from './pages/CartEmpty';

import { useSelector } from 'react-redux'

export const SearchContext = React.createContext("");

function App() {

  const [activeSearch, setActiveSearch] = React.useState("");
  const { pizzas } = useSelector((state) => state.cart);

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ activeSearch, setActiveSearch }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={pizzas.length ? <Cart /> : <CartEmpty />} />
            <Route path='*' element={<NotFoundBlock />} />
          </Routes>
        </SearchContext.Provider>
      </div>
    </div >
  );
}

export default App;
