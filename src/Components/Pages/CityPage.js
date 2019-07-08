import React from 'react'
import Header from '../Header'
import CityList from '../CityList'
import Footer from '../Footer';

export default class CityPage extends React.Component {
    render() {
        return (
            <div className="homepage">
        {/* components */}
                    <Header />
                    <CityList />
                    <Footer />

                </div>
        )
    }
}
