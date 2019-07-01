import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

// import {Link} from 'react-router-dom'
export default class Itineraries extends React.Component {

state = {
    itineraries: [],
    loading: true,
}

async componentDidMount() {
// X router
// console.log(this.props)
const url = "https://ubiqum-mern-api.herokuapp.com/api/itineraries/All";
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
            return <div>loading...</div>;
        }
        else {
            return (
            <div>
                
                {this.state.itineraries.map(itinerary => {
                    return (
                        <Card style={{ width: '100%', marginBottom:'20px' }} key={ itinerary._id }>
                            <Card.Img variant="top" src={ itinerary.img } />
                            <Card.Body>
                                <Card.Title>{ itinerary.title }</Card.Title>
                                <Card.Text>{ itinerary.city }</Card.Text>
                                <Card.Text>{ itinerary.summary }</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Duration: { itinerary.duration }</ListGroupItem>
                                <ListGroupItem>Rating: { itinerary.rating }</ListGroupItem>
                                <ListGroupItem>Price: { itinerary.price }</ListGroupItem>
                            </ListGroup>
                            {/* <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body> */}
                        </Card>
                    )
                }
                )}
            </div>
            )
        }

    }
}
