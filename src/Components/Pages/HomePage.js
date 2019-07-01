import React, { Component } from 'react'
import '../../App.css'
import Header from '../Header'
import Logo from '../Logo'
import Arrow from '../Arrow'
// import Content from './Content'
import SecondContent from '../SecondContent'

// import ContentCityPage from './ContentCityPage';


export default class HomePage extends Component {
    render() {
        return (
            
                <div className="homepage">
                    <Header />
                    <Logo />
                    <Arrow />
                    <SecondContent />
                </div>
        )
    }
}
