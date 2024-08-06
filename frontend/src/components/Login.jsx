import React, { useContext, useState, useEffect } from "react";
import * as Components from "./Component.jsx";
import authContext from "../Context/authcontext.jsx";
import { useNavigate, Link } from "react-router-dom";
import back from "../images/to.png"

const Login = () => {
  const [signin, toggle] = React.useState(true);
  const context = useContext(authContext);
  const { login, success, tap } = context;
  const Navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });
  const [val, setVal] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(cred.email, cred.password);
  };

  useEffect(() => {
    if (success) {
      Navigate("/");
    }
  });

  const onChange = (e) => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="  sm:bg-center    w-full  h-screen   mx-auto font-raleway">
        
        <div className="flex flex-col items-center w-full p-4 justify-center">

          <div
            className={`fixed top-2 w-full bg-red-700/70 h-10 flex items-center ${
              !success && tap ? "block" : "hidden"
            } text-xl p-2 `}
          >
            Alert : Invalid Login Credentials
          </div>

          <div className="container mx-auto  p-4 flex flex-col w-4/5 sm:w-2/5      rounded-lg backdrop-blur-sm  absolute top-20  ">
            <div className="header text-4xl font-bold mb-8 border-b-4 p-4">ShareRide</div>
            <form onSubmit={handleSubmit} className={`w-full my-1 text-left`}>
              <label
                className="font-bold text-lg sm:text-xl my-1 "
                htmlFor="email"
              >
                E-mail
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className=" bg-black/20 p-2 h-10  w-full  border-black my-4 border-b-4 outline-none "
                onChange={onChange}
                value={cred.email}
              />
              <br />
              <label
                className="font-bold text-lg md:text-xl my-1"
                htmlFor="password"
              >
                Password
              </label>
              <br />
              <input
                type="text"
                id="password"
                name="password"
                className=" bg-black/20 p-2 h-10  w-full  border-black my-4 border-b-4 outline-none "
                onChange={onChange}
                value={cred.password}
                required
                minLength={5}
              />
              <br />
              <div className="flex ">
                <div className="flex w-full justify-center">
                  <input
                    type="submit"
                    value="Login"
                    className={`bg-green-600 hover:opacity-95 animate-${val} text-white text-sm md:text-xl lg:text-2xl font-bold  w-full sm:w-2/5 border-2 border-white   h-12 my-4 cursor-pointer hover:scale-105`}
                  ></input>
                </div>
              </div>
            </form>
            <div className="text-2xl my-1 ">or</div>

            <div className="flex justify-center sm:text-lg  w-full">
              <p>Don't have an account?</p>
              <Link to="/signup" className="mx-2 hover:scale-105">
                <u> Sign-up</u>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
