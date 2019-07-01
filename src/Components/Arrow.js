import React from 'react';
import '../../src/App.css';
import {Link} from 'react-router-dom'
import arrow from '../initiallandingpagedesign/circled-right-2.png'
// import ContentCityPage from '../Components/Pages/CityPage/ContentCityPage'
 

class Arrow extends React.Component {
    
  
    render() {
      return (
        <div className="arrow_div">
          <h3>Start browsing</h3>
        <Link to='/cities'><img src={arrow} alt="Arrow" className="arrow"/></Link>
        </div>
      );
    }
  }

  export default Arrow;