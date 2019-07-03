import React from 'react'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
                <div className="text-left" id="footer_component">
                    <Card.Body className="all_footer">
                        <div className="text_footer">
                        <Card.Header className="login_footer">Log In</Card.Header>
                        <Card.Header>Create Account</Card.Header>
                        </div>
                            <Card.Header className="text-center icon_footer">
                                
                                    <Link to='/'><img
                                        src={homeIcon}
                                        width="50"
                                        height="50"
                                        alt="Icon"
                                    /></Link>
                                
                            </Card.Header>
                    </Card.Body>
                    
                </div>

        )
    }
}
export default Footer