import React from 'react';

import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import { useTransition, animated } from 'react-spring';

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
        <Header />
        <Main />
      </Router>
    </Provider>
  );
}


const Main = () => {
  const location = useLocation();

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: location.pathname === "/" ? 1 : 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      transform: location.pathname === "/" ? 'translate3d(0, 0, 0) ' : 'translate3d(0, 100%, 0)'
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: location.pathname === "/" ? 1 : 0, transform: location.pathname === "/" ? 'translate3d(0, 0, 0) ' : 'translate3d(0, 100%, 0)' }
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" component={Landing} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </animated.div>
  ));
};

export default App;