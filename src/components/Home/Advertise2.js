import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Advertise2 = () => {
    return (
        <section className="help-people min-h-[15vh] w-full text-center px-4 py-8 mt-16 mb-20 rounded mx-auto">
            <h1 className="capitalize text-3xl text-white font-bold font-mono">are you ready to rent out your house?</h1>
            <button className="btn btn-primary mt-8"><Link to='/add-listing'>Add Listing</Link></button>
        </section>
    );
};

export default Advertise2;