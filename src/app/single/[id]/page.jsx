import React from 'react';
import data from '../.../../../../../public/data.json';

const page = async ({ params }) => {
    const { id } = await params;
    // console.log(id,'amader id')

    const cawditails = data.find(caw => caw.id === parseInt(id));
    console.log(cawditails);

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Top Section */}
                <div className="flex container mx-auto my-3  gap-6">

                    {/* Image */}
                    <div className="bg-white w-6/12 rounded-3xl overflow-hidden shadow">
                        <img
                            src={cawditails.image}
                            alt="Cow"
                            className="w-full h-full object-cover min-h-[550px]"
                        />
                    </div>

                    {/* Information */}
                    <div className="bg-white w-6/12 rounded-3xl p-10 shadow">

                        <span className="badge badge-success badge-lg">
                            {cawditails.breed}
                        </span>

                        <h1 className="text-5xl font-bold mt-5">
                            {cawditails.name}
                        </h1>

                        <div className="flex gap-4 mt-4 text-gray-500">
                            <span>Cow</span>
                            <span>|</span>
                            <span>{cawditails.type}</span>
                        </div>

                        <h2 className="text-5xl font-bold text-green-600 mt-8">
                            ৳{cawditails.price}
                        </h2>

                        <div className="divider"></div>

                        <div className="space-y-5">

                            <div className="flex justify-between border-b pb-4">
                                <span className="font-medium">Weight</span>
                                <span>{cawditails.weight} KG</span>
                            </div>

                            <div className="flex justify-between border-b pb-4">
                                <span className="font-medium">Age</span>
                                <span>{cawditails.age} Years</span>
                            </div>

                            <div className="flex justify-between border-b pb-4">
                                <span className="font-medium">Location</span>
                                <span>{cawditails.location}</span>
                            </div>

                            <div className="flex justify-between border-b pb-4">
                                <span className="font-medium">Category</span>
                                <span>{cawditails.category}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Availability</span>
                                <span className="text-green-600 font-semibold">
                                    Available
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Section */}

                <div className="bg-white rounded-3xl shadow mt-8 p-8">

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Description */}

                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                About This Animal
                            </h2>

                            <div className="w-16 h-1 bg-green-600 rounded-full mb-6"></div>

                            <p className="leading-9 text-gray-600">
                                {cawditails.description}
                            </p>
                        </div>

                        {/* Details */}

                        <div className="lg:col-span-2">

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">ID</h4>
                                    <p className="font-bold text-xl mt-2">{cawditails.id}</p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Breed</h4>
                                    <p className="font-bold text-xl mt-2">
                                        {cawditails.breed}
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Type</h4>
                                    <p className="font-bold text-xl mt-2">
                                        {cawditails.type}
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Price</h4>
                                    <p className="font-bold text-xl mt-2 text-green-600">
                                        ৳{cawditails.price}
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Weight</h4>
                                    <p className="font-bold text-xl mt-2">
                                        {cawditails.weight} KG
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Age</h4>
                                    <p className="font-bold text-xl mt-2">
                                        {cawditails.age} Years
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Location</h4>
                                    <p className="font-bold text-xl mt-2">
                                        {cawditails.location}
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-5">
                                    <h4 className="text-gray-500">Category</h4>
                                    <p className="font-bold text-xl mt-2">
                                        {cawditails.category}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="max-w-2xl mx-auto">

                <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 md:p-10">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                            🐄
                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            Book Your Animal
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Fill out the form below to reserve your preferred animal.
                        </p>
                    </div>

                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Address
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Enter your full address"
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-black font-bold text-lg shadow-lg hover:scale-[1.02] transition"
                        >
                            Confirm Booking
                        </button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default page;