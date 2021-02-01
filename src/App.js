import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './Components/Header';
import Landing from './Sections/LandingPage';
import Pricing from './Sections/Pricing';
import Payment from './Sections/Payment';

import reducer from './Redux/reducer';
import './App.css';

const store = createStore(reducer);

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/payment" component={Payment} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
