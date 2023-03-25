import React, { useState } from 'react';
import Nav from "../component/Nav";
import { Link } from "react-router-dom";

function Job() {
  const [companyName, setCompanyName] = useState('');
  const [staffAmount, setStaffAmount] = useState('');
  const [position, setPosition] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
    <Nav />
    <div className='mt-20 justify-center flex'>
    <span className='font-bold text-2xl mb-10'>Add Job</span></div>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="company-name" className="block text-gray-700 font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          name="company_name"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="staff-amount" className="block text-gray-700 font-bold mb-2">
          Amount of Staff
        </label>
        <input
          type="number"
          id="staff-amount"
          name="staff_amount"
          value={staffAmount}
          onChange={(event) => setStaffAmount(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="position" className="block text-gray-700 font-bold mb-2">
          Position
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows="3"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
      </form>
      </div>
      )}

export default Job;
