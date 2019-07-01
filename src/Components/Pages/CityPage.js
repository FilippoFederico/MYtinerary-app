import React from 'react'
import Header from '../Header'
import CityList from '../CityList'
// import Logo from '../../Logo'
// import Arrow from '../Arrow'
// import Content from './Content'
import Footer from '../Footer';
// import { BrowserRouter as Router, Route } from "react-router-dom";

export default class CityPage extends React.Component {
    render() {
        return (
            <div className="homepage">
                    <Header />
                    <CityList />
                    <Footer />
                </div>
        )
    }
}
