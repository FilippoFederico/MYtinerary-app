import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import imgSlider from '../imgSlider.js/barcelona.jpg'

class Content extends React.Component {
    render() {
        const images = [
            { url: imgSlider },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];
                return (
            <div>
                <SimpleImageSlider
                    width={'100%'}
                    height={'200px'}
                    images={images}
                />
            </div>
        );
    }
}
export default Content;