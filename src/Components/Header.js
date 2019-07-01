import React from 'react';
import '../../src/App.css';
import loginIcon from '../initiallandingpagedesign/png_icon_1063147.png'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'

import {Link} from 'react-router-dom'

// function Header () {
//     return <p>LOGO</p>
// }

// const Header = () => <p>LOGO</p>


class Header extends React.Component {
    
  
    render() {
      return (
        <div className="header_icons">
        <img src={loginIcon} alt="LogiIn" className="icon"/>
        <Link to='/home'><img src={homeIcon} alt="Home Icon" className="icon"/></Link>
        </div>
      );
    }
  }

  export default Header;