import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './Sections/LandingPage';
import Pricing from './Sections/Pricing';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pricing" render={() =>
          <Pricing />}
        />
        <Route path="/" render={() =>
          <LandingPage />}
        />
      </Switch>
    </Router>
  );
}

export default App;
