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
            </div>
        </header>
    );
};

export default HomeBanner;