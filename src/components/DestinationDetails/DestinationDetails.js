import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationDetails.css';

const DestinationDetails = (props) => {

    const { placeTitle, description } = props.placeItem;
    return (
        <Container>
            <div className="destination-container">
                <div>
                    <h2>{placeTitle}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <form action="">
                        <h4>Origin</h4>
                        <input type="text" placeholder="Dhaka" required />
                        <h4>Destination</h4>
                        <input type="text" placeholder="Cox's Bazer" required />
                        <Link to="/blog">
                            <button className="booking-button">Start Booking</button>
                        </Link>
                    </form>
                </div>
            </div>
        </Container>

    );
};

export default DestinationDetails;