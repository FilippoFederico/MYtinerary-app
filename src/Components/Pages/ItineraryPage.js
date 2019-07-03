import React, { Component } from 'react'
import '../../App.css'
import Header from '../Header'
import Itineraries from '../Itineraries';
import Footer from '../Footer';

// import ContentCityPage from './ContentCityPage';


export default class HomePage extends Component {
    render() {
        const cityName = this.props.match.params.name
        return (
            
                <div className="homepage">
                    <Header />
                    <Itineraries cityName={cityName} />
                    <Footer />
                </div>
        )
    }
}
