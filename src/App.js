import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

function App() {

  const promise = loadStripe('pk_test_51HQEFaARXwtU3QOW29tV3L8HBOEM2bLpnylqWVvsiP7CpqyCxT3TFUCoR825dlFu6G7YvFR8vVCViiq2l9KwpBMD00bzccUwKn');

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS --->>>', authUser);

      if (authUser) {
        // the user just logged in / was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,

        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment" >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          
          <Route exact path="/orders" >
            <Header />
            <Orders />
          </Route>

          <Route exact path="/" >
            <Header />
            <Home />
          </Route>

          <Route path="/*" >
            <h1>Error no url found!!</h1>
          </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
