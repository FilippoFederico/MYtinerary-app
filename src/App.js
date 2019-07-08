import React from 'react';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import CityPage from './Components/Pages/CityPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItineraryPage from './Components/Pages/ItineraryPage';
import RegisterPage from './Components/Pages/RegisterPage';

//-------------

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
  return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cities" component={CityPage} />
            <Route exact path="/register-page" component={RegisterPage} />
{/* X responsive router, show the correct url afeter clicking on each btn*/}
            <Route exact path="/itineraries/:name" component={ItineraryPage} />
          </Switch>

        </div>
      </Router>
  );
}
}

export default App;
