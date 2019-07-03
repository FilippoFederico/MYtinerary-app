import React from 'react';
import '../../src/App.css';
import loginIcon from '../initiallandingpagedesign/png_icon_1063147.png'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'
import { Navbar } from 'react-bootstrap';

import {Link} from 'react-router-dom';


class Header extends React.Component {
    
  
    render() {
      return (
<Navbar bg="light">
    <Navbar.Brand href="#" className="nav_class">
      <img
      src={loginIcon}
        width="30"
        height="30"
        alt="Icon"
      />
      <Navbar.Brand href="#">MYtinerary App</Navbar.Brand>
      <Link to='/'><img
      src={homeIcon}
        width="32"
        height="32"
        alt="Icon"
      /></Link>
    </Navbar.Brand>
  </Navbar>

      );
    }
  }

  export default Header;
