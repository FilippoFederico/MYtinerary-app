import React from 'react';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import CityPage from './Components/Pages/CityPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Itineraries from './Components/Itineraries';

//-------------

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // name: 'React'
    };
  }

  render() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cities" component={CityPage} />
            <Route exact path="/itineraries" component={Itineraries} />

{/* X responsive router, show the correct url afeter clicking on each btn*/}
            <Route exact path="/itineraries/:name" component={Itineraries} />
          </Switch>

{/* path="/itineraries/:name" */}
        </div>
      </Router>
  );
}
}

export default App;
