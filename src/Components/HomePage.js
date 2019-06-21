import React, { Component } from 'react'
import Header from './Header'
import Logo from './Logo'
import Arrow from './Arrow'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Logo />
                <Arrow />
            </div>
        )
    }
}
