import React, { useState , useContext} from "react";
import tripContext from './tripcontext.jsx';
import authContext  from "./authcontext.jsx";

const TripState = (props) => {

  
    const context = useContext(authContext)
    const {token, email, name} = context;
    const [data, setData] = useState(null);

    

   

    const getRide = async (start, end)=>{
    
       
        const url ="http://localhost:5000/api/ride/createride"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token 
          },
          
          body:JSON.stringify({start_location : start,end_location : end})
        })
    
        const json = await response.json();
    
        console.log(json)
    
        setData(json)
    }

    const shareRide = async ()=>{

         var link = "http://localhost:5000/api/share/"
    
       
        const url ="http://localhost:5000/api/share/share-ride-details"

        
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token 
          },

          body:JSON.stringify({
            
            driver_name : data.driver_name,
            driver_phone : data.driver_phone,
            cab_number : data.cab_number,
            start_location : data.start_location,
            end_location : data.end_location,
            start_time : data.start_date,
            link : link,
            tripId : data._id
          })
          
        })
    
        const json = await response.json();
    
        console.log(json)
    }


    const shareFeedback = async (tripId, name, email, feedback) => {
        const url ="http://localhost:5000/api/share/sharefeedback"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token 
          },
          
          body:JSON.stringify({tripId : tripId, name : name, email : email, feedback : feedback})
        })
    
        const json = await response.json();
    
        console.log(json)
    
    }




    
    

   
    


    return (
        <tripContext.Provider value={{getRide, data,shareRide , shareFeedback}}>
            {props.children}
        </tripContext.Provider>
        
      )


}

export default TripState