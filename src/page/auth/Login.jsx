import React from "react";
import { Link } from "react-router-dom";
import "/GigaFinder/gigfinder/src/css/index.css";

function Login() {
  return (
    <div className="back4">
      <div className="flex justify-end">
        <div className="pt-40  px-28 flex flex-col">
          <span className="text-4xl font-semibold py-3">
            Log In to an Account
          </span>
          <span className="text-2xl font-medium">
         Don't have an account?
          <Link to="/register" className="ml-1 text-blue-400">
            Sign Up
          </Link>
        </span>
        <div className="relative mt-10">
          <input
            className="bg-gray-100 w-[368px] rounded-lg h-[60px] mr-4 pt-[18px] pb-2 px-4 outline-none font-semibold"
            type="email"
            id="Email"
            placeholder=" "
            required
          ></input>
          <label
            htmlFor="Email"
            className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px]"
          >
            Email
          </label>
        </div>
        <div className="relative mt-5">
          <input
            className="bg-gray-100 w-[368px] rounded-lg h-[60px] mr-4 pt-[18px] pb-2 px-4 outline-none font-semibold"
            type="password"
            id="Password"
            placeholder=" "
            required
          ></input>
          <label
            htmlFor="Password"
            className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px]"
          >
            Password
          </label>
          <div>
            <Link to="/home">
            <button className="bg-blue-500 w-[368px] text-white font-semibold text-xl rounded-lg mt-5 h-[60px]">Log In</button>
            </Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
