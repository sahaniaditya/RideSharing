import React,{useContext,useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import authContext from '../Context/authcontext.jsx'
import img from "../images/cab.jpg"
import banner from "../images/banner.jpg"
import tripContext from "../Context/tripcontext.jsx";




const Home = () =>{

  const trip = useContext(tripContext)
  const {getRide, data} = trip;
 

  const [cred, setCred] = useState({ start_location: "", end_location: "" });
  

  // const [data, setData] = useState(null);
  
 

  const onChange = (e) => {
    e.preventDefault();
    // Using functional state update to ensure we always have the latest state
    setCred(cred => ({ ...cred, [e.target.name]: e.target.value }));
  };

  const context = useContext(authContext)
  const {success, token} = context;
  const Navigate = useNavigate()
  

  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
   
    },  [success, Navigate]);



//  const getRide = async ()=>{
//     var start = cred.start_location;
//     var end = cred.end_location;

//     console.log(start, end)
//     const url ="http://localhost:5000/api/ride/createride"
//     const response = await fetch(url, {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token" : token 
//       },
      
//       body:JSON.stringify({start_location : start,end_location : end})
//     })

//     const json = await response.json();

//     console.log(json)

//     setData(json)
//   }


  const handleSubmit = () => {
    Navigate("/cab")
  }

  const handleClick = (start, end) => () => {
    if(start != "" && end != ""){
     getRide(start, end)
    }
  }

 
  
    
    
    
    





    
    return (
        <>
         <div className="bg-gray-300 h-screen">


          <div className="background w-full h-20 mx-auto">
              <img src={banner} className="image h-64 w-[95%] mx-auto"/>
          </div>

          <div className="flex items-center justify-between bg-cover bg-center mt-48 px-5 w-[95%]  mx-auto">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className=" md:w-1/2">
                        
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            <input className="border border-gray-300 p-2 mb-4 w-full" placeholder="Enter location" name="start_location" onChange={onChange} value={cred.start_location}/>
                            <input className="border border-gray-300 p-2 mb-4 w-full" placeholder="Enter destination" name="end_location" onChange={onChange} value={cred.end_location}/>
                            <button className="bg-black text-white w-full py-3 rounded" onClick={handleClick(cred.start_location, cred.end_location)}>Search</button>
                        </div>
                    </div>
                   
                </div>

                
               { data && <div className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4 text-left p -4">
                 <div className="px-6 py-4">
                     <div className="font-bold text-xl mb-2 border-b-2 w-80">Trip Details</div>
                     <p className="text-gray-700 text-base ">
                         <strong>Trip ID:</strong> {data._id}
                     </p>
                     <p className="text-gray-700 text-base">
                         <strong>Driver Name:</strong> {data.driver_name}
                     </p>
                     <p className="text-gray-700 text-base">
                         <strong>Cab Number:</strong> {data.cab_number}
                     </p>
                     <p className="text-gray-700 text-base">
                         <strong>Driver Phone:</strong> {data.driver_phone}
                     </p>
            </div>
               
                <button className="submit border-2 bg-blue-600 p-2 mx-auto w-[100%]" onClick={handleSubmit}>Book Cab</button>
       
                </div>
}  
            </div>

          </div>
    
         
         
        
        </>
    )
}

export default Home