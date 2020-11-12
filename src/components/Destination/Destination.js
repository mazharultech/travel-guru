import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fakeData } from '../../fakeData/fakeData';
import DestinationDetails from '../DestinationDetails/DestinationDetails';

const Destination = () => {
    const [placeItems, setPlaceItems] = useState([]);
    const {place} = useParams();
    useEffect(()=>{
       const destinationInfo = fakeData.filter(des => des.placeTitle === place);
        setPlaceItems(destinationInfo);
    }, [])
    const styles = {
        display: 'flex', 

    }
    return (
        <div style={styles}>
            {
                placeItems.map(placeItem => <DestinationDetails 
                    key={placeItem.id}
                    placeItem={placeItem}
                    ></DestinationDetails>)
            }
        </div>
    );
};

export default Destination;