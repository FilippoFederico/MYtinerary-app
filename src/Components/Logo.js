// rcc


import React from 'react';
import '../../src/App.css';
import logo from '../initiallandingpagedesign/MYtineraryLogo.png'
import { Card } from 'react-bootstrap';

console.log(logo)

class Logo extends React.Component {
    
  
    render() {
      return (
        <div className="logoComponent">
          <img src={logo} alt="Logo" className="logo"/>        
          
  <Card.Title>Find your perfect trip, designed by insiders who know and love their cities</Card.Title>


        </div>
        
      );
    }
  }

  export default Logo;