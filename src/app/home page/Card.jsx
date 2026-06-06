// import React from 'react';

import Link from "next/link";

const Card = ({caw}) => {
    return (
        <div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {caw.breed}
                </span>

                <h2 className="text-2xl font-bold mt-4">
                   {caw.name}
                </h2>

                <p className="text-gray-500 mt-2">
                    {caw.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-500 text-sm">Weight</p>
                        <h4 className="font-bold">{caw.weight} KG</h4>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-500 text-sm">Age</p>
                        <h4 className="font-bold">{caw.age} Years</h4>
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-green-600 mt-5">
                    ৳{caw.price}
                </h3>

                <Link href={`single/${caw.id}`}>
                <button className="btn btn-success w-full mt-5 text-white">
                    View Details
                </button></Link>
            </div>
        </div>
    );
};

export default Card;