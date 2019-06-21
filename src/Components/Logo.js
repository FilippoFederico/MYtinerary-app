// rcc


import React from 'react';
import logo from '../initiallandingpagedesign/MYtineraryLogo.png'
console.log(logo)
class Logo extends React.Component {
    
  
    render() {
      return (
        <div>
          <img src={logo} alt="Logo" />
        </div>
      );
    }
  }

  export default Logo;