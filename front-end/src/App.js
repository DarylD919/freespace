import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Basket from './Pages/basket';
import Home from './Pages/Home';
import Item from './Pages/item';

function App() {
    const basket = useSelector((state) => state.basket);
    const { basketItems } = basket;

  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">FreeSpace</Link>
            </div>
            <div>
                <Link to="/signin">Sign In</Link>
                <Link to="/basket">Basket
                {basketItems.length > 0 && (
                    <span className="badge">{basketItems.length}</span>
                )}
                </Link>
            </div>
        </header>

        <main>
            <Route path="/basket/:id?" component={Basket}></Route> 
            <Route path="/product/:id" component={Item}></Route>
            <Route path="/" component={Home} exact></Route>
        </main>

        <footer className="row center">
            All rights reserved 
            Created By Daryl Darilag
        </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
