import React from 'react'
// import homeIcon from '../initiallandingpagedesign/homeIcon.png'
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'


class RegisterContent extends React.Component {
    render() {

        return (
                <withRouter>
                <div className="text-center div_register" id="">


                <Card style={{ width: '18rem' }} className="welcome_register">
                    <Card.Body>
                        <Card.Title>Welcome in</Card.Title>
                        <Card.Title>MYtinerary world!</Card.Title>
                        
                    </Card.Body>
                </Card>


                    <Card.Body className="">
                        <div className="">
                        <Card.Header className="register_login">Log In</Card.Header>
                        <Card.Header className="register_create_account">Create Account</Card.Header>
                        </div>
                            
                    </Card.Body>
                    
                </div>
                </withRouter>

        )
    }
}
export default withRouter(RegisterContent)