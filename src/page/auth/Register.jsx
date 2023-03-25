import {React, useState} from "react";
import "/GigFinder/frontend/src/css/index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiClient from "../../tools/apiClient";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [kategori, setKategori] = useState("");
  const navigate = useNavigate();

  function sendRegisterData() {
    if (!email || !password || !name || !kategori) {
      setMessage("Email and password are required");
      return;
    }
    apiClient.post("/register", {
      name: name,
      email: email,
      password: password,
      kategori: kategori
    })
      // .then((resp) => resp.json())
      .then((e) => {
        console.log(e.status);
        setMessage(e.message);
        if (e.status === 201) {
          alert('Register successful!'); 
          navigate("/login");
        } else if (e.status === 409) {
          alert('Email is already registered! Please use a different email address.');
        } else {
          setMessage(e.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Error registering user. Please try again later.');
      });
  }

  return (
    <div className="back3">
      <div className="pt-32  px-28 flex flex-col">
        
      {message ? message : ""}
        <span className="text-2xl font-medium">START FOR FREE</span>
        <span className="text-4xl font-semibold py-3">Create New Account</span>
        <span className="text-2xl font-medium">
          Aleardy a Member?
          <Link to="/login" className="ml-1 text-blue-400">
            Log In
          </Link>
        </span>
        <div className="relative mt-5">
          <input
            className="bg-gray-100 w-[368px] rounded-lg h-[60px] mr-4 pt-[18px] pb-2 px-4 outline-none font-semibold"
            type="name"
            id="Name"
            placeholder=" "
            value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            required
          ></input>
          <label
            htmlFor="Name"
            className="text-[#9A9A9A] absolute py-[18px] px-4 pointer-events origin-[10px] font-medium"
          >
            Name
          </label>
        </div>
        <div className="relative mt-5">
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
        </div>
        <div className="mt-5 flex flex-row">
          <label className="inline-flex items-center text-lg mr-6">
            <input
              type="radio"
              className="h-6 w-6 text-blue-600"
              name="check"
              value={kategori === 'contributor'}
              id="user"
              required
              onClick={() => {setKategori("Contributor")}}
            />
            <span className="ml-2 font-medium">Contributor</span>
          </label>
          <label className="inline-flex items-center text-lg">
            <input
              type="radio"
              className="h-6 w-6 text-blue-600"
              name="check"
              value={kategori === 'company'}
              id="company"
              required
              checked={kategori === 'Company'}
              onClick={() => {
                setKategori("Company");
              }}
            />
            <span className="ml-2 font-medium">Company</span>
          </label>
        </div>
        <div>
            <button
             onClick={sendRegisterData}
             className="bg-blue-500 w-[368px] text-white font-semibold text-xl rounded-lg mt-5 h-[60px]">
              Submit
            </button>
          {/* <Link to="/login">
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
