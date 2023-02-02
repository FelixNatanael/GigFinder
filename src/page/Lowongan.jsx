import React from "react";
import Nav from "../component/Nav";
import Foto1 from "../image/foto1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Lowongan() {
  return (
    <div>
      <Nav />
      <div className="px-20">
        <div className="relative w-full">
          <input
            type="text"
            className="border mt-7 p-3 px-6 outline-none w-full"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-0 top-[26px] mt-5 mr-5 text-[#cacaca]"
          />
        </div>
        <div className="border mt-20 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-3 leading-[50px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">Require 5member</span>
            <span className="font-medium">PT. John Cons</span>
          </div>
        </div>
        <div className="border mt-5 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-3 leading-[50px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">Require 5member</span>
            <span className="font-medium">PT. John Cons</span>
          </div>
        </div>
        <div className="border mt-5 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-3 leading-[50px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">Require 5member</span>
            <span className="font-medium">PT. John Cons</span>
          </div>
        </div>
        <div className="border mt-5 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-3 leading-[50px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">Require 5member</span>
            <span className="font-medium">PT. John Cons</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lowongan;
