import React from 'react'
import { Card, Spinner, DropdownButton, ListGroupItem } from 'react-bootstrap';

import {Link} from 'react-router-dom'
export default class Itineraries extends React.Component {

state = {
    itineraries: [],
    loading: true,
}

async componentDidMount() {

// X dynamic router
console.log(this.props)
// ${this.props.match.params.name}

const url = `https://ubiqum-mern-api.herokuapp.com/api/itineraries/${this.props.cityName}`;
const response = await fetch(url);
const data = await response.json();
console.log(data)
this.setState({ itineraries: data, loading: false})
// let ItineraryImg = data[3].img;
// console.log(ItineraryImg)

}
clickBtn(event){
    // console.log(event.target.id)
}
    render() {

        if (this.state.loading) {
            return  <div className="spinner">
                        <Spinner animation="border" role="status">
                        </Spinner>
                    </div>
        }
        else {
            return (
            <div>
                
                {this.state.itineraries.map(itinerary => {
                    return (
                            
                                

                                




                                <Card style={{ width: '100%', marginBottom:'20px' }} key={ itinerary._id }>
                            <Card.Img variant="top" src={ itinerary.img} style={{ width: '100%', height: '90%' }}/>
                            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{ itinerary.title }</Card.Title>
                                <Link to='/cities'><Card.Title style={{ display: 'flex', justifyContent: 'center' }}> <span>{ itinerary.city }</span></Card.Title></Link>

                                <DropdownButton
                                    display="flex"
                                    justifyContent="center"
                                    title="More details"
                                    id="dropdown-menu"
                                    className="btn_itineraries"
                                    >
                                    <ListGroupItem><span>Summary</span>: { itinerary.summary }</ListGroupItem>
                                    <ListGroupItem><span>Duration</span>: { itinerary.duration }</ListGroupItem>
                                <ListGroupItem><span>Rating</span> { itinerary.rating }</ListGroupItem>
                                <ListGroupItem><span>Price</span> { itinerary.price }</ListGroupItem>
                                {/* <Link to='/cities'><ListGroupItem>GO BACK TO THE CITY PAGE</ListGroupItem></Link> */}
                                <Link to='/cities'><ListGroupItem cursor="pointer">GO BACK TO THE CITY PAGE</ListGroupItem></Link>
                                    
                                </DropdownButton>


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
