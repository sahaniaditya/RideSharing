import React, { useRef, useState,useContext,useEffect } from "react";
import Navbar from "./Navbar"
import WebcamCapture from "./WebCam";
import Pred from "./Pred.jsx";
import Sidebar from "./Sidebar.jsx";
import avatar from "../images/avatar1.png"
import authContext from "../Context/authcontext.jsx";
const Profile = () => {
  const context = useContext(authContext)
  const {name,email,getuser}= context

  useEffect(() =>{
    getuser()

  })
  

  return (
    <>
      <Sidebar/>
      <div className="main-container flex flex-col bg-main-back w-[100%]  h-screen p-8  font-ubuntu">
        <div className="recommendation text-white font-ubuntu mt-6 bg-sidebar-back p-6">
          <h1 className="header text-left  rounded p-2 text-4xl font-bold">
            Profile
          </h1>
          <div className="container flex flex-row">
          <div className="avatar  w-[20%]">
            <img src={avatar}/>
          </div>
          <div className="info  w-[80%] pl-4 flex flex-col justify-start items-start">
            <div className="name text-3xl mb-3">Name : {name} </div>
            <div className="email text-3xl">Email : {email} </div>
          </div>

          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default Profile;
