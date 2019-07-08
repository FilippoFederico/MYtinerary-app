import React from 'react'
import { Card, Button, InputGroup, FormControl, Spinner } from 'react-bootstrap';

import {Link} from 'react-router-dom'

export default class CityList extends React.Component {

state = {
    cities: [],
    loading: true,
    filter: '',
}
//fetch
async componentDidMount() {

const url = "https://ubiqum-mern-api.herokuapp.com/api/cities";
const response = await fetch(url);
const data = await response.json();
console.log(data)
this.setState({ cities: data, loading: false})
let CityName = data[0]._id;
console.log(CityName)

}
//func not functional to the project
clickBtn(event){
    console.log(event.target.id)
}

handleKeyUp = (event) => {
    //reach the input value
    let valueInput = event.target.value

    //capitalizing the input value
    let newValue = valueInput.charAt(0).toUpperCase() + valueInput.slice(1)
    console.log(newValue)
    
    //just tried to reach the data
    let dataCities = this.state.cities
    console.log('dataCities', dataCities)

    //set filter into state as the input value
    this.setState({filter: newValue})

}
    render() {
        //matching the input value stored as filter with the names of the cities
      let cityList = this.state.cities.filter(city => city.name.includes(this.state.filter))
        //we che see the objects related to input value
        console.log(cityList)
        
      if (this.state.loading) {

            return  <div className="spinner">
                        <Spinner animation="border" role="status">
                        </Spinner>
                    </div>
        }
        else {
            return (
            <div>
            <InputGroup onKeyUp={this.handleKeyUp} className="input_component">
                <InputGroup.Prepend>
                    <InputGroup.Text className="text_input">Find city</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="input_filter" />
            </InputGroup>

                {cityList.map(city => {
                    return (
                        
                        <Card style={{ width: '100%', marginBottom:'20px' }}>
                            <Card.Img variant="top" src={city.img} style={{ width: '100%', height: '90%' }}/>
                            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{ city.name }, { city.country }</Card.Title>
                                <Link to={`/itineraries/${city.name}`}><Button variant="primary" size="lg" block id={city._id} onClick={this.clickBtn}>Itineraries</Button></Link>
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
