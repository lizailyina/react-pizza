import './scss/app.scss';
import { Header } from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { NotFoundBlock } from './pages/NotFoundBlock';

export const SearchContext = React.createContext("");

function App() {

  const [activeSearch, setActiveSearch] = React.useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ activeSearch, setActiveSearch }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFoundBlock />} />
          </Routes>
        </SearchContext.Provider>
      </div>
    </div >
  );
}

export default App;
