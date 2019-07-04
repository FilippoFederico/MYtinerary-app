import React from 'react';
import '../../src/App.css';
import loginIcon from '../initiallandingpagedesign/png_icon_1063147.png'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'
import { Card } from 'react-bootstrap';

import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom';


class Header extends React.Component {
    
  colorLogin = () => {

    console.log(this.props.history.location.pathname)
    if(this.props.history.location.pathname === '/register-page'){
      console.log('function colorLogin')
      return {
        display: 'none' 
      }
      
    }
}
  
    render() {
      return (

        <withRouter>
      <Card.Header className="header_component">
          <div className="header">
            <div className="login_div">

            <Link to='/register-page'><img
              src={loginIcon}
                width="30"
                height="30"
                alt="Icon"
                style={this.colorLogin()}
              /></Link>
            </div>

      <div className="logo_div"><h4>MYtinerary App</h4 ></div>

      <div className="home_div">
      <Link to='/'>
      <img
      src={homeIcon}
        width="32"
        height="32"
        alt="Icon"
      />
      </Link>
      </div>
      
      </div>
  
  </Card.Header>
  </withRouter>
      );
    }
  }

  export default withRouter(Header)
