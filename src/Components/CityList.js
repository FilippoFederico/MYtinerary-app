import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import {Link} from 'react-router-dom'
export default class CityList extends React.Component {

state = {
    cities: [],
    loading: true,
}

async componentDidMount() {

const url = "https://ubiqum-mern-api.herokuapp.com/api/cities";
const response = await fetch(url);
const data = await response.json();
console.log(data)
this.setState({ cities: data, loading: false})
let CityName = data[0]._id;
console.log(CityName)

}
clickBtn(event){
    console.log(event.target.id)
}
    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }
        else {
            return (
            <div>
                {this.state.cities.map(city => {
                    return (
                        
                        <Card style={{ width: '100%', marginBottom:'20px' }}>
                            <Card.Img variant="top" src={city.img} style={{ width: '100%', height: '90%' }}/>
                            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{ city.name }, { city.country }</Card.Title>
                                <Link to='/itineraries'><Button variant="primary" id={city._id} onClick={this.clickBtn}>Click</Button></Link>
                            </Card.Body>
                        </Card>                        
                    )
                }
                )}
            </div>
            )
        }

    }
}
