import React, {useContext, } from 'react';
import authContext from '../Context/authcontext.jsx'
import tripContext from "../Context/tripcontext.jsx";
import { useNavigate } from 'react-router-dom'

function Cab({ ride }) {
    // Dummy function for button actions

    const trip = useContext(tripContext)
    const {getRide, data, shareRide} = trip;
    const Navigate = useNavigate()

    console.log(data)




    const handleDestinationReached = () => {
        alert("Destination has been reached!");
    };

    const handleShareRide = () => {
        // Simulate sharing the ride details
        shareRide();
        alert("Ride details shared successfully!");
        Navigate("/companion")
    };

    return (
        <div className='flex justify-center items-center bg-gray-300 h-screen'>
        <div className="w-[85%] mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl text-left bg-white">
            <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide  text-indigo-500 font-semibold text-4xl">Ride Details</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">Trip ID: {data._id}</p>
                    <p className="mt-2 text-gray-500">User ID: {data.user}</p>
                    <p className="mt-2 text-gray-500">Driver Name: {data.driver_name}</p>
                    <p className="text-gray-500">Cab Number: {data.cab_number}</p>
                    <p className="text-gray-500">Driver Phone: {data.driver_phone}</p>
                    <p className="text-gray-500">Start Date and Time : {data.start_date}</p>
                    <p className="text-gray-500">Start Location : {data.start_location}</p>
                    <p className="text-gray-500">End Location : {data.end_location}</p>
                   
                    <div className="mt-4">
                        <button
                            onClick={handleDestinationReached}
                            className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                            Destination Reached
                        </button>
                        <button
                            onClick={handleShareRide}
                            className="text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                            Share Ride
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Cab;