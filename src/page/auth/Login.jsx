import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "/GigFinder/frontend/src/css/index.css";
import { useState } from "react";
import apiClient from "../../tools/apiClient";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function sendLoginData() {
    if (!email || !password) {
      setMessage("Email and password are required");
      return;
    }
    // fetch("http://localhost:8000/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    //   headers: { "Content-type": "application/json" },
    // })
    //   .then((resp) => resp.json())
    //   .then((e) => {
    //     console.log(e.status);
    //     setMessage(e.message);
    //     if (e.status === 'success') {
    //       alert('Login successful!'); 
    //       // navigate("/home");
    //       test();
    //     } else {
    //       setMessage(e.message);
    //     }
    //   });

    apiClient.post("/login", {
      email: email,
      password: password
    })
      // .then((resp) => resp.json())
      .then((e) => {
        console.log(e.status);
        setMessage(e.message);
        if (e.status === 200) {
         
          navigate("/home");
          
        }else if (e.status === 401) {
          alert('Login Failed');
        } else {
          setMessage(e.message);
        }
      })
    .catch((error) => {
      console.log(error);
      alert('Login Failed ');
    });
  }

  return (
    <div className="back4">
      <div className="flex justify-end">
        <div className="pt-40  px-28 flex flex-col">
      {message ? message : ""}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
            <label
              htmlFor="Email"
              className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px] font-medium"
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>
            <label
              htmlFor="Password"
              className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px] font-medium"
            >
              Password
            </label>
            <div>
              <button
                onClick={sendLoginData}
                className="bg-blue-500 w-[368px] text-white font-semibold text-xl rounded-lg mt-5 h-[60px]"
              >
                Log In
              </button>
              {/* <Link to="/home">
            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
