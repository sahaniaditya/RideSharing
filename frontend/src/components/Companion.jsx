import React, {useContext, useEffect, useState} from 'react';
import authContext from '../Context/authcontext.jsx'
import tripContext from "../Context/tripcontext.jsx";

  
function Companion() {
    // Dummy function for button actions

    const trip = useContext(tripContext)
    const {getRide, data, shareRide, shareFeedback} = trip;

    const userDetails = useContext(authContext)
    const {getuser, email, name} = userDetails;


    console.log("Companion " , data)

    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const submitFeedback = (e) => {
        e.preventDefault();
        // Here you would normally send the feedback to the server
        console.log("Submitting Feedback: ", feedback);
        shareFeedback(data._id, "Aditya Sahani", "adityasahani893@gmail.com", feedback)
        alert('Feedback submitted successfully!');
        setFeedback(''); // Reset feedback field after submission
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
                    <p className="text-gray-500">Tracking Link: {<a href="#" className='text-blue-500'>Track Your Partner</a>}</p>
                    <form onSubmit={submitFeedback} className="mt-4">
                      <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
                      <textarea
                          id="feedback"
                          rows="4"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter your feedback here..."
                          value={feedback}
                          onChange={handleFeedbackChange}
                      />
                      <button
                          type="submit"
                          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                          Submit Feedback
                      </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Companion;