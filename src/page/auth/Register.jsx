import React from "react";
import "/GigaFinder/gigfinder/src/css/index.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="back3">
      <div className="pt-32  px-28 flex flex-col">
        <span className="text-2xl font-medium">START FOR FREE</span>
        <span className="text-4xl font-semibold py-3">Create New Account</span>
        <span className="text-2xl font-medium">
          Aleardy a Member?
          <Link to="/login" className="ml-1 text-blue-400">
            Log In
          </Link>
        </span>
        <div className="flex flex-row mt-5">
          <div className="relative">
            <input
              className="bg-gray-100 w-44 rounded-lg h-[60px] mr-4 pt-[18px] pb-2 px-4 outline-none font-semibold"
              type="text"
              id="FirstName"
              placeholder=" "
              required
            ></input>
            <label
              htmlFor="FirstName"
              className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px]"
            >
              First Name
            </label>
          </div>
          <div className="relative ">
            <input
              className="bg-gray-100 w-44 rounded-lg h-[60px] mr-4 pt-[18px] pb-2 px-4 outline-none font-semibold"
              type="text"
              id="SecondName"
              placeholder=" "
            ></input>
            <label
              htmlFor="SecondName"
              className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px]"
            >
              Second Name
            </label>
          </div>
        </div>
        <div className="relative mt-5">
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
        </div>
        <div className="mt-5 flex flex-row">
          <label className="inline-flex items-center text-lg mr-6">
            <input
              type="radio"
              className="h-6 w-6 text-blue-600"
              name="check"
              value="1"
              id="user"
              required
            />
            <span className="ml-2 font-medium">Contributor</span>
          </label>
          <label className="inline-flex items-center text-lg">
            <input
              type="radio"
              className="h-6 w-6 text-blue-600"
              name="check"
              value="2"
              id="company"
              required
            />
            <span className="ml-2 font-medium">Company</span>
          </label>
        </div>
        <div>
            <Link to="/login">
            <button className="bg-blue-500 w-[368px] text-white font-semibold text-xl rounded-lg mt-5 h-[60px]">Submit</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
