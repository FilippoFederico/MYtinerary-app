import React from 'react'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'


class Footer extends React.Component {
    render() {
        return (
            <div className="secondContent">
                <h4>Want to build your own MYtinerary?</h4>
                <div className="linksContent">
                    <h4>Log in</h4>
                    <h4>Create Account</h4>
                </div>
                <img src={homeIcon} alt="Home Bottom Icon" className="icon"/>
            </div>
        )
    }
}
export default Footer