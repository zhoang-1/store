import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from '../../utils/slideImages'
import "./SlideShow.css"




const SlideShow = () => {
    return (
      <div className="slide-container">
      <Fade>
        {slideImages.map((slideImages, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={slideImages.url} />
            <h2>{slideImages.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>

    )
}

export default SlideShow