import React from "react";
import Logo from "../image/icon.png";
import { Link } from "react-router-dom";

function landing() {
  return (
    <div className="back2">
      <img src={Logo} alt="" />
      <div className="text-black px-52 ">
        <span className="text-7xl font-bold">GigFinder</span>
        <br />
        <br />
        <span className="text-5xl font-semibold leading-[3.3rem]">
          {" "}
          Need Freelance <br /> for your work? <br /> We got you <br /> Covered!{" "}
          <br />
        </span>
        <Link to="/login">
        <button className="bg-[#0075FF] text-white mt-5 w-24 h-10 rounded-lg font-medium tracking-wider">
          Login
        </button>
        </Link>
        <br />
        <br />
          <span className="text-[#A7A7A7] font-semibold">
            {" "}
            Don't have an account?
          </span>
        <Link to="/register">
          <span className="text-[#4098FF] font-semibold">
            {" "}
            Sign up for free
          </span>
        </Link>
      </div>
    </div>
  );
}

export default landing;
