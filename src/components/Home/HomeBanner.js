import React from 'react';

const HomeBanner = () => {
    return (
        <header className="text-center flex justify-center items-center bg-black h-[90vh] w-full">
            <div className="w-full lg:w-4/5 mx-auto lg:flex justify-center items-center gap-16">
                <div className="w-full lg:w-3/5">
                    <h1 className="text-5xl text-white font-medium font-serif"><span
                        className="text-primary font-bold text-6xl">Rent</span> Your House Today</h1>
                    <p className="hidden lg:block text-slate-300 mt-6 font-serif">Our platform is where a householder can offer
                        their
                        houses/flats for rent and a tenant can rent a house/flat.</p>
                    <p className="hidden lg:block text-slate-300 mt-6 font-serif">A householder can upload information of their
                        available houses like images, facilities etc.
                        Furthermore, a tenant can contact the householder through our website.</p>
                </div>
                <div className="hidden sm:block w-3/5 md:w-2/5 bg-white px-6 py-8 rounded mx-auto mt-5 lg:mt-0">
                    <h1 className="capitalize text-2xl font-medium">search your house</h1>
                    <div
                        className="bg-white rounded-lg w-fit flex justify-center items-center px-4 mx-auto mt-6 border border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <input className="input w-full max-w-xs rounded-r-none focus:outline-none active:outline-none"
                            type="text" placeholder="Search by Location" />
                    </div>
                    <div
                        className="bg-white rounded-lg w-fit flex justify-center items-center px-4 mx-auto mt-5 border border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <input className="input w-full max-w-xs rounded-r-none focus:outline-none active:outline-none"
                            type="text" placeholder="Approximate Amount" />
                    </div>
                    <button className="btn btn-primary mt-6"><i className="fa-solid fa-magnifying-glass mr-2"></i>Filter
                        House</button>
                </div>
            </div>
        </header>
    );
};

export default HomeBanner;