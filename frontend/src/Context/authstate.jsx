import React, { useState } from "react";
import AuthContext from './authcontext.jsx';

const AuthState = (props) => {

    const [token,setToken]=useState("")

    const [success,setsuccess]=useState(false)
    const [tap,settap]=useState(false)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const login = async (email,password)=>{
        const url ="http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
           
            
          },
          
          body:JSON.stringify({email,password})
        })

        const json = await response.json();
        if(json.success)
         localStorage.setItem("token", json.authtoken);
        
        
        
        setToken(json.authtoken)
        setsuccess(json.success)
        settap(true)
        
        
        
        



    }

    const signin= async (name,email,password)=>{
     
        const url ="http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            
            
          },
          
          body:JSON.stringify({name,email,password})
        })

        const json=await response.json()

       
        if (json.success) 
           localStorage.setItem("token", json.authtoken);
          
        setToken(json.authtoken)
        setsuccess(json.success)
        settap(true)
        

    }

    const logout=()=>{
      setsuccess(false)
      setToken("")
      settap(false)
    }

    const getuser= async ()=>{
      const url ="http://localhost:5000/api/auth/getuser"
    
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" :token
          
          
        },
        
        
      })

      const json=await response.json()
      
      setName(json.name)
      setEmail(json.email)
      
    }

    


    return (
        <AuthContext.Provider value={{token,setToken,success,login,signin,logout,tap,settap,name,getuser,email}}>
            {props.children}
        </AuthContext.Provider>
        
      )


}

export default AuthState