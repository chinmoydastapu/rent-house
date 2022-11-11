import React, { useEffect, useState } from 'react';
import House from './House';

const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('houses.json')
            .then(res => res.json())
            .then(data => setHouses(data));
    }, [])

    return (
        <>
            <small className="block text-green-400 font-bold mt-20 text-center">Choose Our Houses</small>
            <h1 className="text-4xl font-bold mb-10 text-center">Our Available Houses</h1>
            <div className='mx-10 sm:my-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7'>
                {
                    houses.map(house => <House key={house.id} house={house}></House>)
                }
            </div>
        </>
    );
};

export default Houses;