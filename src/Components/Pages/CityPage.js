import React from 'react'
import '../..'
import Header from '../Header'
import CityList from '../CityList'
// import Logo from '../../Logo'
// import Arrow from '../Arrow'
// import Content from './Content'
import SecondContent from '../SecondContent'
// import { BrowserRouter as Router, Route } from "react-router-dom";

export default class CityPage extends React.Component {
    render() {
        return (
            <div className="homepage">
                    <Header />
                    <CityList />
                    <SecondContent />
                </div>
        )
    }
}
