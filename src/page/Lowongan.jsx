import React from "react";
import Nav from "../component/Nav";
import Foto1 from "../image/foto1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CgUserList } from "react-icons/cg";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Lowongan() {
  return (
    <div>
      <Nav />
      <div className="px-20 mt-20">
        <div className="flex flex-row">
          <div className="relative w-full">
            <input
              type="text"
              className="border mt-7 text-lg font-medium p-3 px-12 outline-none w-full"
              placeholder="Position , Company"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-0 top-[26px] mt-5 ml-5 text-[#cacaca]"
            />
          </div>
          <div className="relative ml-5 w-full">
            <input
              type="text"
              className="border mt-7 text-lg font-medium p-3 px-12 outline-none w-full"
              placeholder="All Job Specialties"
            />
            <CgUserList className="absolute left-0 top-[26px] mt-[14px] ml-[14px] w-7 h-7 text-[#cacaca]" />
            <Popup trigger={
              <Link>
                <GrDown className="absolute right-0 top-[26px] mt-[14px] mr-[14px] w-5 h-7 opacity-20" />
              </Link>
              
            } position="bottom right" >
              <div className="w-80 h-60 bg-blue-600 mt-2"></div>
            </Popup>
          </div>
          <div>
            <button className="w-28 font-semibold text-lg h-[54px] rounded-lg ml-5 bg-[#345698] tracking-wider text-white mt-7 ">
              Search
            </button>
          </div>
          <div>
            <Link to="/job">
            <button className="w-32 font-semibold text-lg h-[54px] rounded-lg ml-5 bg-[#345698] tracking-wider text-white mt-7 ">
              Add Job
            </button>
            </Link>
          </div>
        </div>
        <Link to="/apply">
          <div className="border mt-10 flex flex-row ">
            <img className="w-32 m-6" src={Foto1} alt="" />
            <div className="flex flex-col mt-3 leading-[50px]">
              <span className="font-semibold">Web Programming</span>
              <span className="font-medium">Require 5member</span>
              <span className="font-medium">PT. John Cons</span>
            </div>
          </div>
        </Link>
        <Link to="/apply">
          <div className="border mt-5 flex flex-row ">
            <img className="w-32 m-6" src={Foto1} alt="" />
            <div className="flex flex-col mt-3 leading-[50px]">
              <span className="font-semibold">Web Programming</span>
              <span className="font-medium">Require 5member</span>
              <span className="font-medium">PT. John Cons</span>
            </div>
          </div>
        </Link>
        <Link to="/apply">
          <div className="border mt-5 flex flex-row ">
            <img className="w-32 m-6" src={Foto1} alt="" />
            <div className="flex flex-col mt-3 leading-[50px]">
              <span className="font-semibold">Web Programming</span>
              <span className="font-medium">Require 5member</span>
              <span className="font-medium">PT. John Cons</span>
            </div>
          </div>
        </Link>
        <Link to="/apply">
          <div className="border mt-5 flex flex-row ">
            <img className="w-32 m-6" src={Foto1} alt="" />
            <div className="flex flex-col mt-3 leading-[50px]">
              <span className="font-semibold">Web Programming</span>
              <span className="font-medium">Require 5member</span>
              <span className="font-medium">PT. John Cons</span>
            </div>
          </div>
        </Link>
        <Link to="/apply">
          <div className="border mt-5 flex flex-row ">
            <img className="w-32 m-6" src={Foto1} alt="" />
            <div className="flex flex-col mt-3 leading-[50px]">
              <span className="font-semibold">Web Programming</span>
              <span className="font-medium">Require 5member</span>
              <span className="font-medium">PT. John Cons</span>
            </div>
          </div>
        </Link>
        <Link to="/apply">
          <div className="border mt-5 flex flex-row ">
            <img className="w-32 m-6" src={Foto1} alt="" />
            <div className="flex flex-col mt-3 leading-[50px]">
              <span className="font-semibold">Web Programming</span>
              <span className="font-medium">Require 5member</span>
              <span className="font-medium">PT. John Cons</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Lowongan;
