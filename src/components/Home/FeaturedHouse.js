import React from 'react';
import './style.css';
import FeaturedImg from '../../images/featured-house.jpg';
import { FaBed, FaChartArea, FaCheckCircle, FaToilet } from 'react-icons/fa';

const FeaturedHouse = () => {
    return (
        <section
            className="featured-house min-h-[65vh] w-11/12 mt-20 mx-auto text-white flex justify-center items-center rounded">
            <div className="lg:flex justify-center items-center gap-8 p-10">
                <div className="w-full lg:p-8 lg:w-1/2"><img
                    className="border border-primary rounded-lg min-h-[30vh] md:min-h-[60vh]"
                    src={FeaturedImg} alt="" /></div>
                <div className="mt-16 lg:mt-0 lg:w-1/2">
                    <small className="text-green-500">Checkout New</small>
                    <h1 className="text-4xl font-medium font-serif">Featured House</h1>
                    <p className="text-lg text-gray-400 mt-8">This is the best pick from our website right now</p>
                    <h3 className="mt-4 text-gray-400"><FaCheckCircle className='inline mr-2 text-green-500'></FaCheckCircle>With furnitures and regular accessories</h3>
                    <h3 className="text-gray-400"><FaCheckCircle className='inline mr-2 text-green-500'></FaCheckCircle>One of our best houses</h3>
                    <h3 className="text-gray-400"><FaCheckCircle className='inline mr-2 text-green-500'></FaCheckCircle>Lorem ipsum
                        dolor sit amet.</h3>
                    <hr className="w-3/4 mx-auto mt-5" />
                        <div className="flex justify-start items-center gap-20 mt-6">
                            <p><FaBed className='inline mr-2 text-green-500'></FaBed>4</p>
                            <p><FaToilet className='inline mr-2 text-green-500'></FaToilet>2</p>
                            <p><FaChartArea className='inline mr-2 text-green-500'></FaChartArea>500 sqft</p>
                        </div>
                        <div className="text-center mt-6"><button className="btn btn-primary w-full">Rent Now</button></div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedHouse;