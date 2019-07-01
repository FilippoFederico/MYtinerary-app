import React from 'react';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import CityPage from './Components/Pages/CityPage'
import { BrowserRouter as Router, Route } from "react-router-dom";

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

      <Route exact path="/home" component={HomePage} />

    
      <Route exact path="/cities" component={CityPage}>

</Route>
        </div>
      </Router>
  );
}
}

export default App;
