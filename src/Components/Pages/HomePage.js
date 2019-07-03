import React, { Component } from 'react'
import '../../App.css'
import Header from '../Header'
import Logo from '../Logo'
import Arrow from '../Arrow'
import Footer from '../Footer';


export default class HomePage extends Component {
    render() {
        return (
            
                <div className="homepage">
                    <Header />
                    <Logo />
                    <Arrow />
                    <Footer />
                </div>
        )
    }
}
