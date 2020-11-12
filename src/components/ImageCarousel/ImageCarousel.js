import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = (props) => {
    const {placeTitle, img, description} = props.place;
    


    return (
        <div className="container">
            <div onClick={()=> props.handlePlaceClick(props.place)} className="image-container">
                <img style={{height: '300px', marginLeft: '20px'}} src={img} alt=""/>
                <h2>{placeTitle}</h2>
            </div>
        </div>
    );
};

export default ImageCarousel;