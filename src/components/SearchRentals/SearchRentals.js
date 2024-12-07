import React, { useState } from 'react';
import { FaDollarSign, FaLocationArrow, FaSearch } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import House from '../Home/House';

const SearchRentals = () => {
    const [filteredHouses, setFilteredHouses] = useState([]);
    const houses = useLoaderData();

    const handleFilteredHouses = event => {
        event.preventDefault();
        const form = event.target;
        const searchLocation = form.location.value;
        const searchAmount = form.amount.value;

        setFilteredHouses(houses.filter(house => house.location.toLowerCase() === searchLocation.toLowerCase() && parseFloat(house.rent) <= parseFloat(searchAmount)));
    };

    return (
        <div className='mb-20'>
            <small className='block mt-10 text-center font-semibold text-green-500'>Search Rentals</small>
            <h1 className='w-2/3 mx-auto text-4xl font-bold text-center mb-10'>Search Your Rental Houses Easily with Location and Affordable Amount</h1>
            <form onSubmit={handleFilteredHouses} className="w-4/5 md:w-2/5 bg-white px-6 py-8 rounded shadow-xl mx-auto lg:mt-0 border text-center">
                <h1 className="capitalize text-2xl font-medium">search your house</h1>
                <div
                    className="bg-white rounded-lg w-fit flex justify-center items-center px-4 mx-auto mt-6 border border-primary">
                    <FaLocationArrow></FaLocationArrow>
                    <input name='location' className="input w-full max-w-xs rounded-r-none focus:outline-none active:outline-none"
                        type="text" placeholder="Search by Location" required />
                </div>
                <div
                    className="bg-white rounded-lg w-fit flex justify-center items-center px-4 mx-auto mt-5 border border-primary">
                    <FaDollarSign></FaDollarSign>
                    <input name='amount' className="input w-full max-w-xs rounded-r-none focus:outline-none active:outline-none"
                        type="text" placeholder="Approximate Amount" required />
                </div>
                <button type='submit' className="btn btn-primary mt-6">Filter
                    House<FaSearch className='ml-2'></FaSearch></button>
            </form>
            {
                (filteredHouses.length !== 0) &&
                <>
                    <small className='block mt-20 text-center font-semibold text-green-500'>Available Houses</small>
                    <h1 className='text-4xl font-bold text-center'>Total <span className='text-primary'>{filteredHouses.length}</span> houses found</h1>
                    <div className='my-16 mx-10 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7'>
                        {
                            filteredHouses.map((house, idx) => <House key={idx} house={house}></House>)
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default SearchRentals;