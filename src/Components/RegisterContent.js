import React from 'react'
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'


class RegisterContent extends React.Component {

//checkbox functionality
    constructor() {
        super();
        this.state = {isChecked: false};
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
      }

      handleChecked = () => {
        this.setState({isChecked: !this.state.isChecked});
      }

    render() {

        var txt;
    if (this.state.isChecked) {
      txt = 'Yeah, checked!'
    } else {
      txt = 'Check to accept'
    }

        return (
                <withRouter>
                    <div className="text-center div_register">

                        <Card style={{ width: '18rem' }} className="welcome_register">
                            <Card.Body>
                                <Card.Title>Welcome in</Card.Title>
                                <Card.Title>MYtinerary world!</Card.Title>
                                
                            </Card.Body>
                        </Card>


                        <Card.Body className="card_body">
                            <div>
                                <Card.Header className="register_login">Log In</Card.Header>
                                <Card.Header className="register_create_account">Create Account</Card.Header>
    
    
                                <div className="div_checkbox">
            

                                    <Card style={{ width: '18rem' }} className="policy_register">
                                        <Card.Body>
                                            <Card.Title className="p_checkbox">A Privacy Policy is a legal statement that specifies what the business owner does with the data collected from users.</Card.Title>
                                            <input type="checkbox" id="checkbox_id" onChange={this.handleChecked} />
                                             <label for="checkbox_id">{ txt }</label>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                                
                        </Card.Body>
                        
                    </div>
                </withRouter>

        )
    }
}
export default withRouter(RegisterContent)