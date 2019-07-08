// rcc = to write automatically the basic component structure

import React from 'react';
import '../../src/App.css';
import logo from '../initiallandingpagedesign/MYtineraryLogo.png'
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

console.log(logo)

class Logo extends React.Component {

    //using withRouter I modify a component in a specific location page by editTextLogo function
  editTextLogo = () => {

    if(this.props.history.location.pathname === '/register-page'){
      console.log('FUNCTION editTextLogo')
      return {
        // change style 
        display: 'none',
        
      }
    }

  }
  
    render() {
      return (
        <withRouter>
          <div className="logoComponent">

            <img src={logo} alt="Logo" className="logo"/>        
            <Card.Title
            style={this.editTextLogo()}
            marginTop="4%"
            marginBottom="4%">Find your perfect trip, designed by insiders who know and love their cities
            </Card.Title>

          </div>
        </withRouter>
      );
    }
  }

  export default withRouter(Logo)