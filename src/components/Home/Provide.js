import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './style.css';
// import ProvideImg from '../../images/animated-house.png';

const Provide = () => {
    return (
        <section className="mb-20 mx-auto provide-bg px-10">
            <div className="md:flex justify-center items-center">
                <div className="md:w-1/2 p-5">
                    <small className="capitalize text-green-400 font-bold">we provide full services</small>
                    <h2 className="capitalize text-3xl mb-5 font-medium">helping people to find the home</h2>
                    <p className="text-gray-600 capitalize"><FaCheckCircle className='inline mr-2 text-green-500'></FaCheckCircle>Contact Facilities between buyer and seller</p>
                    <p className="text-gray-600 mt-3 capitalize"><FaCheckCircle className='inline mr-2 text-green-500'></FaCheckCircle>Rent house at almost free of cost</p>
                    <p className="text-gray-600 mt-3 capitalize"><FaCheckCircle className='inline mr-2 text-green-500'></FaCheckCircle>Safe and trustworthy services</p>
                    <button className="btn btn-primary mt-8"><i className="fa-solid fa-magnifying-glass mr-2"></i><a href="/src/search-rentals.html">Search
                        House</a></button>
                </div>
                <div className='md:1/2'>
                    <img className="min-w-full" src="https://cdn.dribbble.com/users/5068307/screenshots/14301530/media/a549df3302d078abacc7955d46c70a77.gif" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Provide;