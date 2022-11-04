import React from 'react';
import './style.css';
import ProvideImg from '../../images/animated-house.png';

const Provide = () => {
    return (
        <section className="mb-20 mx-auto pt-10 pb-16 bg-slate-100">
            <div className="md:flex justify-center items-center">
                <div className="p-5">
                    <small className="capitalize text-green-400 font-bold">we provide full services</small>
                    <h2 className="capitalize text-3xl mb-5 font-medium">helping people to find the home</h2>
                    <p className="text-gray-500"><i className="fa-solid fa-clipboard-check mr-2 text-green-400"></i>Lorem ipsum
                        dolor sit amet
                        consectetur adipisicing elit.</p>
                    <p className="text-gray-500 mt-3"><i className="fa-solid fa-clipboard-check mr-2 text-green-400"></i>Lorem
                        ipsum
                        dolor sit amet
                        consectetur adipisicing elit. Architecto, dolore.</p>
                    <p className="text-gray-500 mt-3"><i className="fa-solid fa-clipboard-check mr-2 text-green-400"></i>Lorem
                        ipsum
                        dolor sit amet
                        consectetur adipisicing elit. Architecto</p>
                    <button className="btn btn-primary mt-8"><i className="fa-solid fa-magnifying-glass mr-2"></i><a href="/src/search-rentals.html">Search
                        House</a></button>
                </div>
                <div>
                    <img className="min-w-full" src={ProvideImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Provide;