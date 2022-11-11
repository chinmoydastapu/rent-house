import React from 'react';
import { FaBed, FaToilet } from 'react-icons/fa';

const House = ({ house }) => {
    const { bed, bath, rent, image, location, title } = house;

    return (
        <div className="mb-7 md:mb-0 card bg-slate-100 shadow-xl">
            <figure><img className='w-full h-52 hover:scale-125 transition ease-in-out duration-700 hover:brightness-50' src={image} alt="..." /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{location}</div>
                </h2>
                <p className='text-2xl'>Rent: ${rent}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline py-2 px-3"><FaBed className='mr-2'></FaBed>{bed}</div>
                    <div className="badge badge-outline py-2 px-3"><FaToilet className='mr-2'></FaToilet>{bath}</div>
                </div>
                <button className="btn btn-primary mt-5">Rent Now</button>
            </div>
        </div>
    );
};

export default House;