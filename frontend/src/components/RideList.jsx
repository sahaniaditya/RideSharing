import React, {useState, useEffect, useContext} from 'react';
import authContext from '../Context/authcontext.jsx'
function RideList() {

  const [rides, setData]  = useState([])

  const context = useContext(authContext)
  const {success, token} = context;


  const getAllRides = async () =>{
    
       
    const url ="http://localhost:5000/api/ride/getallrides"
    const response = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" : token 
      }
    })

    const json = await response.json();

    console.log(json)
    setData(json);

    
}

useEffect(() => {
  console.log("Get All Rides.")
  getAllRides();
},[])



  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-5">Your Rides</h1>
        {rides.length > 0 ? (
          rides.map((ride) => (
            <div key={ride._id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-3">Ride Details</h2>
              <p><strong>Trip ID:</strong> {ride._id}</p>
              <p><strong>Cab Number:</strong> {ride.cab_number}</p>
              <p><strong>Driver Name:</strong> {ride.driver_name}</p>
              <p><strong>Driver Phone:</strong> {ride.driver_phone}</p>
              <p><strong>Start Location:</strong> {ride.start_location}</p>
              <p><strong>End Location:</strong> {ride.end_location}</p>
              <p><strong>Start Date:</strong> {new Date(ride.start_date).toLocaleString()}</p>
              <p><strong>Status:</strong> {ride.status}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No rides found.</p>
        )}
      </div>
    </div>
  );
}

export default RideList;