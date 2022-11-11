import React from 'react';

const HomeBanner = () => {
    return (
        <header className="text-center pt-10 h-[100vh] w-full">
            <div className="w-full lg:w-4/5 mx-auto lg:flex justify-center items-center gap-16">
                <div className="w-full lg:w-3/5">
                    <h1 className="text-5xl lg:text-6xl text-black font-medium font-serif"><span
                        className="text-primary font-bold text-6xl">Rent</span> Your House Today</h1>
                    <p className="hidden lg:block font-mono mt-6 text-slate-600">Our platform is where a householder can offer
                        their
                        houses/flats for rent and a tenant can rent a house/flat.</p>
                    <p className="hidden lg:block font-mono mt-6 text-slate-600">A householder can upload information of their
                        available houses like images, facilities etc.
                        Furthermore, a tenant can contact the householder through our website.</p>
                </div>
                {/* <div className="hidden sm:block w-3/5 md:w-2/5 bg-white px-6 py-8 rounded mx-auto mt-5 lg:mt-0">
                    <h1 className="capitalize text-2xl font-medium">search your house</h1>
                    <div
                        className="bg-white rounded-lg w-fit flex justify-center items-center px-4 mx-auto mt-6 border border-primary">
                        <FaLocationArrow></FaLocationArrow>
                        <input className="input w-full max-w-xs rounded-r-none focus:outline-none active:outline-none"
                            type="text" placeholder="Search by Location" />
                    </div>
                    <div
                        className="bg-white rounded-lg w-fit flex justify-center items-center px-4 mx-auto mt-5 border border-primary">
                        <FaDollarSign></FaDollarSign>
                        <input className="input w-full max-w-xs rounded-r-none focus:outline-none active:outline-none"
                            type="text" placeholder="Approximate Amount" />
                    </div>
                    <button className="btn btn-primary mt-6"><i className="fa-solid fa-magnifying-glass mr-2"></i>Filter
                        House</button>
                </div> */}
            </div>
        </header>
    );
};

export default HomeBanner;