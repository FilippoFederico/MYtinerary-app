import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';

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
    <div className="App">

      <HomePage />

    </div>
  );
}
}

export default App;
