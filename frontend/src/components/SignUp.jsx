import React,{useContext,useEffect,useState} from 'react';
import AuthContext from '../Context/authcontext.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import back from "../images/to.png"


const SignUp = () => {
    const context= useContext(AuthContext)
    const{signin,success,tap,settap} = context
    const [cred,setCred]= useState({name:"",email:"",password:""})
    const navigate=useNavigate();


    const onChange=(e)=>{
        setCred({...cred,[e.target.name]: e.target.value})


    }

    const handleSubmit=async (e)=>{
       e.preventDefault();
       signin(cred.name,cred.email,cred.password)

    }

    useEffect(()=>{
        if(success){
            navigate('/')
        }

    },[success])

    useEffect(()=>{
   
    
      
      if(tap){
      setTimeout(() => {
        
          settap(false)
    
        
      },3000);
    }
  
  
    },[tap])

    

  return (
    <>
    
    <div className="  sm:bg-center    w-full  h-screen   mx-auto font-raleway">
    
    
    <div className="flex flex-col items-center w-full p-10 justify-center">
        <div className={`fixed top-6 w-full bg-red-700/70 h-10 flex items-center ${(!success && tap)?"block":"hidden"} text-xl p-2 `}>Alert : E-mail already used.</div>
        
        
        <div className="container mx-auto p-4 flex flex-col w-4/5 sm:w-2/5 items-center   rounded-lg   absolute   top-12   ">
        <div className="header text-4xl font-bold mb-8 border-b-4 p-4">ShareRide</div>
        <form onSubmit={handleSubmit} className={`w-full my-1 text-left`}>
        <label className="font-bold text-lg sm:text-xl my-1" htmlFor="name">Name</label><br/>
          <input type="name" id="name" name="name" className=" bg-black/20 p-2 h-10  w-full border-b-4 outline-none border-black my-4 " onChange={onChange} value={cred.name} /><br/>
          <label className="font-bold text-lg sm:text-xl my-1" htmlFor="email">E-mail</label><br/>
          <input type="email" id="email" name="email" className=" bg-black/20 p-2 h-10  w-full border-b-4 outline-none border-black my-4 " onChange={onChange} value={cred.email} /><br/>
          <label className="font-bold text-lg md:text-xl my-1" htmlFor="password">Password</label><br/>
          <input type="text" id="password" name="password" className=" bg-black/20 p-2 h-10  w-full border-b-4 outline-none border-black my-4 " onChange={onChange} value={cred.password}  required minLength={5} /><br/>
          <div className='flex '>
         <div className="flex w-full justify-center">
         <input type="submit" value="Sign-Up" className="bg-green-600 hover:opacity-95 hover:scale-105 text-white text-sm md:text-xl lg:text-2xl font-bold  w-full sm:w-2/5 border-2 border-white h-12 my-4 cursor-pointer"></input>
         </div>
          </div>
        
        </form>
        <div className="text-2xl my-1 ">or</div>
        
          
        <div className="flex justify-center sm:text-lg  w-full"><p>Already have an account?</p><Link to="/login" className="mx-2 hover:scale-105" ><u>Login</u></Link></div>
          
          
         




        </div>
       
       


    </div>

    </div>
      
    </>
  )
}

export default SignUp