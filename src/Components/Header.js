import React from 'react';
import '../../src/App.css';
import loginIcon from '../initiallandingpagedesign/png_icon_1063147.png'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'
import { Card } from 'react-bootstrap';

import {Link} from 'react-router-dom';


class Header extends React.Component {
    
  
    render() {
      return (
      <Card.Header className="header_component">
          <div className="header">
            <div className="login_div">
              <img
              src={loginIcon}
                width="30"
                height="30"
                alt="Icon"
              />
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

      );
    }
  }

  export default Header;
