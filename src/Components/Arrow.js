import React from 'react';
import '../../src/App.css';
import {Link} from 'react-router-dom'
import arrow from '../initiallandingpagedesign/circled-right-2.png' 

class Arrow extends React.Component {
  
    render() {
      return (
        <div className="arrow_div">
          <h3>Discover our destinations</h3>
          <Link to='/cities'><img src={arrow} alt="Arrow" className="arrow" marginBottom="5%"/></Link>
        </div>
      );
    }
  }

  export default Arrow;