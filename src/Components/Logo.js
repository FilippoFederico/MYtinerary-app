// rcc


import React from 'react';
import '../../src/App.css';
import logo from '../initiallandingpagedesign/MYtineraryLogo.png'
console.log(logo)
class Logo extends React.Component {
    
  
    render() {
      return (
        <div className="logoComponent">
          <img src={logo} alt="Logo" className="logo"/>
          <h2>Find your perfect trip, designed by insiders who know and love their cities</h2>
        </div>
      );
    }
  }

  export default Logo;