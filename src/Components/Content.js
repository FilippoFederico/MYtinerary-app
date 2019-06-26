import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

import barcelona from '../imgSlider.js/barcelona.jpg'
import hollywood from '../imgSlider.js/hollywood.jpg'
import london from '../imgSlider.js/london.jpg'
import miami from '../imgSlider.js/miami.jpg'
import milano from '../imgSlider.js/milano.jpg'
import moscow from '../imgSlider.js/moscow.jpg'
import newyork from '../imgSlider.js/newyork.jpg'
import riodejaneiro from '../imgSlider.js/riodejaneiro.jpg'
import roma from '../imgSlider.js/roma.jpg'
import shanghai from '../imgSlider.js/shanghai.jpg'
import sidney from '../imgSlider.js/sidney.jpg'
import paris from '../imgSlider.js/paris.jpg'





class Content extends React.Component {
    render() {
        const images = [{url: barcelona}, {url:hollywood}, {url:london}, {url:miami}, {url:milano}, {url:moscow}, {url:newyork}, {url:paris}, {url:riodejaneiro}, {url:roma}, {url:shanghai}, {url:sidney}];
                
                
                return (
                    <div className="containerSlider">
                    <h3>Popular MYtineraries</h3>
            <div className="slider">
                
                
                    <SimpleImageSlider
                    width={400}
                    height={300}
                    images={images}
                    />
                
                    </div>
            </div>
        );
    }
}



export default Content;