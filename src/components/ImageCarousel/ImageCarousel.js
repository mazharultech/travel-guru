import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = (props) => {
    // console.log(props);
    const {placeTitle, img, description} = props.place;
    const newItem = {placeTitle, img, description};
    


    return (
        <div className="container">
            <div className="text-container">
                {/* <h3>{placeDetails.place}</h3>
                <p>{placeDetails.description}</p> */}
            </div>
            <div onClick={()=> props.handlePlaceClick(props.place)} className="image-container">
                <img style={{height: '300px', marginLeft: '20px'}} src={img} alt=""/>
                <h2>{placeTitle}</h2>
            </div>
        </div>
    );
};

export default ImageCarousel;