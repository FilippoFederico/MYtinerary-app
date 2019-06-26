import React from 'react'
import homeIcon from '../initiallandingpagedesign/homeIcon.png'


class SecondContent extends React.Component {
    render() {
        return (
            <div className="secondContent">
                <h4>Want to build your own MYtinerary?</h4>
                <div className="linksContent">
                    <h4><a href="">Log in</a></h4>
                    <h4><a href="">Create Account</a></h4>
                </div>
                <img src={homeIcon} alt="Home Bottom Icon" className="icon"/>
            </div>
        )
    }
}
export default SecondContent