import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Centang from "../image/centang.png";

function Apply() {
  return (
    <div className="overflow-hidden">
      <div className="font-semibold text-4xl flex flex-row py-7 px-10">
        <Link to="/lowongan">
          <BsArrowLeft />
        </Link>
        <span className="ml-5">Web Programming</span>
      </div>
      <div className="border w-auto border-black mx-24 mb-10 h-screen pl-10 py-6 flex flex-col overflow-hidden">
        <span className="font-semibold text-3xl">Metro Computer</span>
        <span className="font-medium mt-2 text-2xl">
          Our company needs people who can Web Programming
        </span>
        <span className="font-medium text-2xl mt-2">Require Skill : </span>
        <span className="font-medium text-xl mt-2">
          "PHP,JS,JAVA,HTML,CSS,PHYTHON"
        </span>
        <span className="font-medium text-xl mt-2 pr-[600px]">
          We need a Web Programmer, to create a website for our company based on
          PHP, HTML , CSS and Javascript.
        </span>
        <span className="mt-5 text-xl font-medium ">Send a Proposal File</span>
        <div className="flex flex-row w-full">
          <span class="sr-only">Choose profile photo</span>
          <input
            type="file"
            class="block w-full text-lg rounded text-[#cdcdcd] mt-2 border
      file:mr-4 file:py-2 file:px-4
      file:rounded-sm file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-white
      hover:file:bg-violet-100 file:bg-blue-500
    "
          />
        <div className=" invisible w-[900px]">lol</div>
        </div>
        <span className="mt-3 text-xl font-medium">Enter Your Email</span>
        <div className="flex flex-row w-full">
        <input
          type="email"
          className="mt-2 border w-full outline-none rounded px-4 h-9"
          required
        />
        <div className=" invisible w-[900px]">lol</div>
        </div>
        <div className="text-white ml-auto m-10   font-bold mt-auto">
          <Popup
            trigger={
              <button
                type="submit"
                className="border w-40 bg-blue-500 rounded-lg h-12"
              >
                Apply
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-[500px] md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                  <div className="modal-content py-4 text-left px-6">
                    <div className="flex flex-col items-center pb-3">
                      <div className="flex flex-row ">
                        <img src={Centang} className="w-20 mt-5" alt="" />
                        <button
                          className="modal-close cursor-pointer z-50 relative left-40 bottom-10"
                          onClick={close}
                        >
                          <svg
                            className="fill-current text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L9 7.586l6.293-6.293a1 1 0 1 1 1.414 1.414L10.414 9l6.293 6.293a1 1 0 1 1-1.414 1.414L9 10.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L7.586 9 1.293 2.707a1 1 0 0 1 0-1.414z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-base font-bold px-5 mt-5">
                        Your Application has been succesfully sent
                      </p>
                      <p className="text-base font-medium mt-">
                        We will inform you of the results via your email
                      </p>
                      <Link to="/lowongan">
                        <button className="w-20 h-10 bg-blue-500 text-white font-semibold text-lg rounded-md mt-5">
                          Back
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Apply;
