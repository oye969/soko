import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import TrackYourOrder from './Components/TrackYourOrder';
import Coupons from './Components/Coupons';
import Footer from './Components/Footer';





function App() {
  return (
      <Router>
        <div className="App">
        <Switch>
      <Route path="/track">
        <Header />
        <TrackYourOrder />
      </Route>
      <Route path="/coupons">
        <Header />
        <Coupons />   
      </Route>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path="/login">
        <Header />
        <Login />
      </Route>
      <Route path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
