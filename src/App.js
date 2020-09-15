import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route path="/track">
          <Header />
          <h1>Track Your Order</h1>
        </Route>
      <Route path="/orders">
          <Header />
          <h1>Orders</h1>
        </Route>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <Header />
        <h1>Login Page</h1>
        </Route>
        <Route path="/">
          <Header />
          <h1>Home Page</h1>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
