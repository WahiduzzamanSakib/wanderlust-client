import { DeletedAlert } from '@/components/deletedAlert/Page';
import EditModal from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `http://localhost:5000/destination/${id}`
    );

    const destination = await res.json();

    console.log(destination);

    return (
        <div>

            <div className="bg-gray-100 min-h-screen py-10">
                <div className="max-w-5xl mx-auto px-4">

                    {/* Modal sent */}
                    <div className='py-3 flex justify-end'>
                        <div className="flex justify-end mb-4 gap-2">
                            <EditModal destination={destination} />
                            <DeletedAlert destination={destination}/>
                        </div>
                    </div>
                    {/* Modal end */}

                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                        {/* Hero Image */}
                        <Image
                            src={destination.imageUrl}
                            alt={destination.destinationName}
                            width={1200}
                            height={500}
                            className="w-full h-[450px] object-cover"
                        />

                        {/* Content */}
                        <div className="p-8">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
                                <div>
                                    <h1 className="text-4xl font-bold text-gray-800">
                                        {destination.destinationName}
                                    </h1>

                                    <p className="text-lg text-gray-500 mt-3">
                                        📍 {destination.country}
                                    </p>
                                </div>

                                <div className="bg-green-50 px-6 py-4 rounded-xl">
                                    <p className="text-sm text-gray-500">Starting From</p>
                                    <h2 className="text-3xl font-bold text-green-600">
                                        ${destination.price}
                                    </h2>
                                </div>
                            </div>

                            {/* Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                                <div className="bg-blue-50 p-5 rounded-xl border">
                                    <p className="text-sm text-gray-500">Category</p>
                                    <h3 className="text-xl font-semibold mt-1">
                                        {destination.category}
                                    </h3>
                                </div>

                                <div className="bg-orange-50 p-5 rounded-xl border">
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <h3 className="text-xl font-semibold mt-1">
                                        {destination.duration}
                                    </h3>
                                </div>

                                <div className="bg-green-50 p-5 rounded-xl border">
                                    <p className="text-sm text-gray-500">Departure Date</p>
                                    <h3 className="text-xl font-semibold mt-1">
                                        {destination.departureDate}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">
                                    About This Destination
                                </h2>

                                <p className="text-gray-600 leading-8">
                                    {destination.description}
                                </p>
                            </div>

                            {/* Booking Button */}
                            <button className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
                                Book This Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;