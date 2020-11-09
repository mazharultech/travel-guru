import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../images/banner.png';
import Logo from '../../images/logo.png';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './Header.css';

const Header = () => {
    const [placeDetails, setPlaceDetails] = useState({});
    
    const handlePlaceClick = (place) =>{
        setPlaceDetails(place);
    }

    const tourismPlaces = [
        {
            id: '1',
            category: 'Coxs BAZER',
            placeTitle: 'COXS BAZER',
            description: 'Coxs BAZER is a city fishing port, tourism center and district headquaters in southestern Bangladesh. It is famous mostly for its long natural sandy beach and its look like awesome place.',
            img: 'https://i.postimg.cc/K8qc8RjR/Sajek.png' 
        },
        {
            id: '2',
            category: 'Sree Mongal',
            placeTitle: 'Sree Mongal',
            description: 'Sree Mongal is a city fishing port, tourism center and district headquaters in southestern Bangladesh. It is famous mostly for its long natural sandy beach and its look like awesome place.',
            img: 'https://i.postimg.cc/SRFxb3sd/Sreemongol.png' 
        },
        {
            id: '3',
            category: 'Sundarbon',
            placeTitle: 'Sundarbon',
            description: 'Sundarbon is a city fishing port, tourism center and district headquaters in southestern Bangladesh. It is famous mostly for its long natural sandy beach and its look like awesome place.',
            img: 'https://i.postimg.cc/59LtS47R/sundorbon.png' 
        }
    ]
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
                <button className="booking-button">Booking</button>
            </div>
            <div style={{display: 'flex', marginLeft: '50%'}}>
                {
                    tourismPlaces.map(place => <ImageCarousel
                        handlePlaceClick={handlePlaceClick}
                        place={place}></ImageCarousel>)
                }
            </div>
        </div>
        
    </div>
);
};

export default Header;