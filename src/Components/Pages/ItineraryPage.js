import React, { Component } from 'react'
import '../../App.css'
import Header from '../Header'
import Itineraries from '../Itineraries';
import Footer from '../Footer';

export default class ItineraryPage extends Component {
    render() {
        const cityName = this.props.match.params.name
        return (
            
                <div className="homepage">
            {/* components for ItineraryPage */}
                    <Header />
                    <Itineraries cityName={cityName} />
                    <Footer />

                </div>
        )
    }
}
