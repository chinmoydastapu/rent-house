import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { postHouse } from '../../housesAPI'

const AddListing = () => {
    const handleAddListing = async event => {
        event.preventDefault();

        const form = event.target;
        const title = form.housename.value;
        const location = form.houselocation.value;
        const street_address = form.street_address.value;
        const bed = form.bed.value;
        const bath = form.bath.value;
        const rent = form.rent.value;
        const banner_img = form.houseimg.value;

        const houseListingData = { title, location, street_address, bed, bath, rent, banner_img }

        const resp = await postHouse(houseListingData);
        if(resp.status === 200) {
            toast.success("Your house is added successfully")
            form.reset()
        } else {
            toast.error("Your house is not added")
        }
    };

    return (
        <div className="bg-violet-200 p-5 m-10 rounded-xl">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-3xl font-medium  text-gray-900">Enlist Your House</h3>
                        <p className="capitalize mt-1 text-sm text-gray-600">
                            Add your house by submitting this form
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST" onSubmit={handleAddListing}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="house-name" className="block text-sm font-medium text-gray-700">House Title</label>
                                        <input type="text" name="housename" id="house-name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" required />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="house-location" className="block text-sm font-medium text-gray-700">House Location</label>
                                        <input type="text" name="houselocation" id="house-location" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" required />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Appr. Rent</label>
                                        <input type="text" name="rent" id="rent" autoComplete="rent" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" required />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street Address</label>
                                        <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="bed" className="block text-sm font-medium text-gray-700">Bed</label>
                                        <input type="text" name="bed" id="bed" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" required />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="bath" className="block text-sm font-medium text-gray-700">Bath</label>
                                        <input type="text" name="bath" id="bath" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" required />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="img-url" className="block text-sm font-medium text-gray-700">House Image</label>
                                        <input type="text" name="houseimg" id="img-url" autoComplete="img-url" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100 p-2" required />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-white text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Add Listing
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddListing;