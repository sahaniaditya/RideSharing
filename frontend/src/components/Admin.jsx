import React, { useEffect, useState, useContext } from 'react';

import authContext  from "../Context/authcontext.jsx";

function Admin() {
  // State to manage which view to show
  const [view, setView] = useState('rides'); // 'rides' or 'feedback'

  const context = useContext(authContext)
  const {token} = context;

  // Dummy data for demonstration
  const [sharedRides, setRides] = useState([])

  const [feedbacks, setFeedback] = useState([])


  const getRides = async ()=>{
    const url ="http://localhost:5000/api/ride/admin-rides"

    console.log(token)
  
    const response = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" :localStorage.getItem("token")
      }
      
      
    })

    const json = await response.json()

    console.log(json)

    setRides(json)
  
    
  }

  const getFeedbacks = async ()=>{
    const url ="http://localhost:5000/api/share/getallfeedbacks"

    console.log(token)
  
    const response = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" :localStorage.getItem("token")
      }
      
      
    })

    const json = await response.json()

    console.log(json)

    setFeedback(json)
  
    
  }

  useEffect(() => {
    getRides();
    getFeedbacks();
  }, [])

  return (
    <div className="p-5 text-left">
      <div className="flex justify-between mb-5">
        <button
          className={`px-4 py-2 font-bold text-white rounded-md ${view === 'rides' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setView('rides')}
        >
          Shared Rides
        </button>
        <button
          className={`px-4 py-2 font-bold text-white rounded-md ${view === 'feedback' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setView('feedback')}
        >
          Feedbacks
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden ">
        <ul>
          {view === 'rides' ? (
            sharedRides.map(ride => (
              <li key={ride.id} className="px-4 py-4 bg-white border-b border-gray-500">
                <h3 className="text-lg font-bold">{ride.user}'s Ride</h3>
                <p><strong>Trip ID:</strong> {ride.tripId}</p>
                <p><strong>Start:</strong> {ride.start_location}</p>
                <p><strong>End:</strong> {ride.end_location}</p>
              </li>
            ))
          ) : (
            feedbacks.map(feedback => (
              <li key={feedback.id} className="px-4 py-4 bg-white border-b border-gray-500">
                <h3 className="text-lg font-bold">{feedback.name}'s Feedback</h3>
                <p>{feedback.feedback}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
