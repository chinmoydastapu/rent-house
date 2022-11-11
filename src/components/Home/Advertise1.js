import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Advertise1 = () => {
    return (
        <section className="help-people min-h-[15vh] w-full text-center mt-16 px-4 py-8 rounded mx-auto">
            <h1 className="capitalize text-3xl text-white font-bold font-mono">We help people and homes find each other</h1>
            <button className="btn btn-primary mt-8"><Link to='/search-rentals'>Search
                House</Link></button>
        </section>
    );
};

export default Advertise1;