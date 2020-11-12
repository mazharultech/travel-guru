import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../images/banner.png';
import Logo from '../../images/logo.png';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import {fakeData} from '../../fakeData/fakeData';
import './Header.css';

const Header = () => {
    const [places, setPlaces] = useState([]);
    const [placeDetails, setPlaceDetails] = useState({});
    
    useEffect(() =>{
        setPlaces(fakeData);
    }, [])
    const handlePlaceClick = (place) =>{
        setPlaceDetails(place);
    }


    
  return (
    <div className="header-container" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${Banner})` }}>
        <Container>
        <nav>
            <li>
                <img style={{ height: '60px', color: 'white'}}src={Logo} alt="" />
            </li>
            
                <input className="search-input" type="search" name="" placeholder="Search your Destination..."/>
           
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/destination">Destination</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </nav>
        </Container>
        <div>
            <div>
                <h2 style={{color: 'white'}}>{placeDetails.placeTitle}</h2>
                <p style={{color: 'white'}}>{placeDetails.description}</p>
                <Link to={`/destination/${placeDetails.placeTitle}`}><button className="booking-button">Booking</button></Link>
            </div>
            <div style={{display: 'flex', marginLeft: '50%'}}>
                {
                    places.map(place => <ImageCarousel
                        key={place.id}
                        handlePlaceClick={handlePlaceClick}
                        place={place}></ImageCarousel>)
                }
            </div>
        </div>
        
    </div>
);
};

export default Header;