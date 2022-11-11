import React from 'react';
import { FaHome, FaHouseDamage, FaWarehouse} from 'react-icons/fa';
import './style.css';

const Membership = () => {
    return (
        <section className="mt-20 mb-20 text-center mx-auto pt-10 pb-16 bg-slate-100">
            <div className="w-4/5 mx-auto">
                <small className="text-green-400 font-semibold">Choose the Right Plan</small>
                <h1 className="text-4xl font-bold">Membership Plans</h1>
                <div className="mt-8 md:flex justify-center items-center gap-5">
                    {/* <!-- Card 1 Personal --> */}
                    <div className="hover:shadow-2xl hover:scale-110 hover:transition ease-in-out duration-500 py-8 px-10 rounded shadow-lg mx-auto lg:w-full bg-white">
                        <FaHouseDamage className='text-7xl text-primary block mx-auto'></FaHouseDamage>
                        <small className="block mt-5 font-semibold text-gray-600">Personal</small>
                        <h2 className="text-4xl">$20.00</h2>
                        <small className="block mt-5 text-gray-600">10
                            Listings</small>
                        <small className="block text-gray-600">Featured
                            Listings</small>
                        <button className="btn btn-primary mt-5">Choose Plan</button>
                    </div>
                    {/* <!-- Card 2 Professional --> */}
                    <div className="hover:shadow-2xl hover:scale-110 hover:transition ease-in-out duration-500 py-8 px-10 rounded shadow-lg mx-auto lg:w-full bg-white mt-8 md:mt-0">
                        <FaHome className='text-7xl text-primary block mx-auto'></FaHome>
                        <small className="block mt-5 font-semibold text-gray-600">Professional</small>
                        <h2 className="text-4xl">$30.00</h2>
                        <small className="block mt-5 text-gray-600">20
                            Listings</small>
                        <small className="block text-gray-600">Featured
                            Listings</small>
                        <button className="btn btn-primary mt-5">Choose Plan</button>
                    </div>
                    {/* <!-- Card 3 Business --> */}
                    <div className="hover:shadow-2xl hover:scale-110 hover:transition ease-in-out duration-500 py-8 px-10 rounded shadow-lg mx-auto lg:w-full bg-white mt-8 md:mt-0">
                        <FaWarehouse className='text-7xl text-primary block mx-auto'></FaWarehouse>
                        <small className="block mt-5 font-semibold text-gray-600">Business</small>
                        <h2 className="text-4xl">$40.00</h2>
                        <small className="block mt-5 text-gray-600">30
                            Listings</small>
                        <small className="block text-gray-600">Featured
                            Listings</small>
                        <button className="btn btn-primary mt-5">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;