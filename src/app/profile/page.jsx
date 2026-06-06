import React from 'react';

const page = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto py-12 px-4">

                {/* Profile Card */}

                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <div className="flex justify-center items-center align-middle space-x-4 gap-5 flex-col lg:flex-row lg:items-center gap-8">

                        <img
                            src="https://i.pravatar.cc/300"
                            alt=""
                            className="w-36 h-36 rounded-full object-cover border-4 border-green-500"
                        />      

                        <div className="flex-1">

                            <h2 className="text-4xl font-bold">
                                Jakawat Hussain
                            </h2>

                            <p className="text-gray-500 mt-2">
                                demo@gmail.com
                            </p>

                            <p className="text-gray-500">
                                +8801712345678
                            </p>

                            <p className="text-gray-500">
                                Dhaka, Bangladesh
                            </p>

                        </div>

                        <button className="btn bg-green-600 text-white border-none">
                            Edit Profile
                        </button>

                    </div>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

                    <div className="bg-white shadow rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-green-600">
                            12
                        </h3>
                        <p>Total Bookings</p>
                    </div>

                    <div className="bg-white shadow rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-green-600">
                            8
                        </h3>
                        <p>Favorites</p>
                    </div>

                    <div className="bg-white shadow rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-green-600">
                            5
                        </h3>
                        <p>Reviews</p>
                    </div>

                    <div className="bg-white shadow rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-green-600">
                            2025
                        </h3>
                        <p>Joined</p>
                    </div>

                </div>

                {/* Information */}

                <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

                    <h3 className="text-2xl font-bold mb-6">
                        Account Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <p className="text-gray-500">Full Name</p>
                            <p className="font-semibold">Jakawat Hussain</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Email</p>
                            <p className="font-semibold">demo@gmail.com</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Phone</p>
                            <p className="font-semibold">01712345678</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Address</p>
                            <p className="font-semibold">Dhaka, Bangladesh</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default page;