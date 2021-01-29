import { BrowserRouter as Router, Route} from "react-router-dom";

import LandingPage from './Sections/LandingPage';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" render={() =>
        <LandingPage />}
      />
    </Router>
  );
}

export default App;
