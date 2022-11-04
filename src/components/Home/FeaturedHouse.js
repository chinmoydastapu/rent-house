import React from 'react';
import './style.css';
import FeaturedImg from '../../images/featured-house.jpg';

const FeaturedHouse = () => {
    return (
        <section
            className="featured-house min-h-[65vh] w-11/12 mt-20 mx-auto text-white flex justify-center items-center rounded">
            <div className="lg:flex justify-center items-center gap-8 p-10">
                <div className="w-full lg:w-9/12 lg:p-8"><img
                    className="border border-primary rounded-lg min-h-[30vh] md:min-h-[60vh]"
                    src={FeaturedImg} alt="" /></div>
                <div className="mt-16 lg:mt-0">
                    <small className="text-primary">Checkout New</small>
                    <h1 className="text-4xl font-medium font-serif">Featured House</h1>
                    <p className="text-lg text-gray-400 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, amet.</p>
                    <h3 className="mt-4 text-gray-400"><i className="fa-solid fa-circle-check mr-2 text-green-400"></i>Lorem
                        ipsum dolor sit amet.</h3>
                    <h3 className="text-gray-400"><i className="fa-solid fa-circle-check mr-2 text-green-400"></i>Lorem ipsum
                        dolor sit amet.</h3>
                    <h3 className="text-gray-400"><i className="fa-solid fa-circle-check mr-2 text-green-400"></i>Lorem ipsum
                        dolor sit amet.</h3>
                    <hr className="w-3/4 mx-auto mt-5" />
                        <div className="flex justify-start items-center gap-20 mt-6">
                            <p><i className="fa-solid fa-bed text-green-400 mr-2"></i>4</p>
                            <p><i className="fa-solid fa-toilet text-green-400 mr-2"></i>2</p>
                            <p><i className="fa-solid fa-warehouse text-green-400 mr-2"></i>500 sqft</p>
                        </div>
                        <div className="text-center mt-6"><button className="btn btn-primary w-full">Rent Now</button></div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedHouse;