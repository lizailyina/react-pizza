import './scss/app.scss';
import { Header } from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { NotFoundBlock } from './pages/NotFoundBlock';

function App() {

  const [activePage, setActivePage] = React.useState(0);
  const [activeSearch, setActiveSearch] = React.useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <Header activeSearch={activeSearch} setActiveSearch={setActiveSearch} />
        <Routes>
          <Route path='/' element={<Home
            activeSearch={activeSearch}
            activePage={activePage}
            setActivePage={setActivePage} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
