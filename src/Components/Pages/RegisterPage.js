import React, { Component } from 'react'
import '../../App.css'
import Header from '../Header'
import RegisterContent from '../RegisterContent'
import Logo from '../Logo';


export default class RegisterPage extends Component {
    render() {
        return (
            
                <div className="homepage">
                    <Header />
                    <RegisterContent />
                    <Logo />
                </div>
        )
    }
}
