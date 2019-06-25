import React, { Component } from 'react'
import '../../src/App.css'
import Header from './Header'
import Logo from './Logo'
import Arrow from './Arrow'
import Content from './Content'


export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Header />
                <Logo />
                <Arrow />
                <Content />
            </div>
        )
    }
}
