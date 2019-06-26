import React from 'react';
import '../../src/App.css';
import arrow from '../initiallandingpagedesign/circled-right-2.png'

class Arrow extends React.Component {
    
  
    render() {
      return (
        <div className="arrow_div">
          <h3>Start browsing</h3>
        <img src={arrow} alt="Arrow" className="arrow"/>
        </div>
      );
    }
  }

  export default Arrow;