import React, { Component } from 'react'
import '../../src/App.css'
import Header from './Header'
import Logo from './Logo'
import Arrow from './Arrow'

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Header />
                <Logo />
                <Arrow />
            </div>
        )
    }
}
