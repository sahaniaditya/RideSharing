import React,{ useState, useEffect } from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AuthState from './Context/authstate.jsx'
import Signin from './components/SignUp.jsx'
// import Profile from "./components/Profile.jsx"
import History from "./components/History.jsx"
import ProfileState from "./Context/profileState.jsx"
import Navbar from "./components/Navbar.jsx"
import Admin from "./components/Admin.jsx"
import  Cab from "./components/Cab.jsx"
import TripState from "./Context/tripState.jsx"
import Companion from './components/Companion.jsx'
import RideList from "./components/RideList.jsx"

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<> <Home/> </>},
    {path:"/login",element:<><Login/></>},
    {path:"/signup",element:<><Signin/></>},
    {path:"/history", element : <><History/></>},
    {path:"/admin", element:<><Admin/></>},
    {path : "/cab", element : <><Cab/></>}, 
    {path : "/companion", element : <><Companion/></>},
    {path : "/allrides", element : <><RideList/></>}
    
    
  ])
  

  return (
    <>
    
    <AuthState>
    <ProfileState>
      <TripState>
      <Navbar/>
     <RouterProvider router={router}/>
     </TripState>
     </ProfileState>
    
     </AuthState>
     

    </>
  )
}

export default App
