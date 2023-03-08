import './scss/app.scss';
import { Header } from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { NotFoundBlock } from './pages/NotFoundBlock';
import { CartEmpty } from './pages/CartEmpty';

import { useSelector } from 'react-redux'
import { selectCart } from './redux/slices/cartSlice';

function App() {

  const { pizzas } = useSelector(selectCart);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={pizzas.length ? <Cart /> : <CartEmpty />} />
          <Route path='*' element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
