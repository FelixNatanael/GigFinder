import React from "react";
import Nav from "../component/Nav";
import Foto1 from "../image/foto1.png";
import { AiFillStar } from "react-icons/ai";

function Inbox() {
  return (
    <div>
      <Nav />
      <div className="px-20 mt-24">
        <div className="border mt-10 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-8 leading-[30px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">PT. John Cons</span>
            <div className="flex flex-row mt-5">
              {" "}
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
            </div>
            <div className="absolute right-[150px] mt-10">
              <span className="font-semibold">Waiting for Confirmation</span>
            </div>
          </div>
        </div>
        <div className="border mt-5 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-8 leading-[30px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">PT. John Cons</span>
            <div className="flex flex-row mt-5">
              {" "}
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
            </div>
            <div className="absolute right-[150px] mt-10">
              <span className="font-semibold">Accepted</span>
            </div>
          </div>
        </div>
        <div className="border mt-5 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-8 leading-[30px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">PT. John Cons</span>
            <div className="flex flex-row mt-5">
              {" "}
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
            </div>
            <div className="absolute right-[150px] mt-10">
              <span className="font-semibold">Accepted</span>
            </div>
          </div>
        </div>
        <div className="border mt-5 flex flex-row ">
          <img className="w-32 m-6" src={Foto1} alt="" />
          <div className="flex flex-col mt-8 leading-[30px]">
            <span className="font-semibold">Web Programming</span>
            <span className="font-medium">PT. John Cons</span>
            <div className="flex flex-row mt-5">
              {" "}
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
              <AiFillStar className="text-xl text-[#fdcc0d] mr-1" />
            </div>
            <div className="absolute right-[150px] mt-10">
              <span className="font-semibold">Accepted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
