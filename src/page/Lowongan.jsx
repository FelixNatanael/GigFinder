import { React, useState } from "react";
import Nav from "../component/Nav";
import Foto1 from "../image/foto1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CgUserList } from "react-icons/cg";
import { GrDown, GrUp } from "react-icons/gr";
import Select from "react-select";
import { Link } from "react-router-dom";

function Lowongan() {
  const options = [
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'product-manager', label: 'Product Manager' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };
  return (
    <div>
      <Nav />
      <div className="px-20 mt-20">
        <div className="flex flex-row">
          <div className="relative w-full">
            <input
              type="text"
              className="border border-[#cacaca] rounded mt-7 outline-blue-400 text-lg font-medium p-3 px-12 w-full"
              placeholder="Position , Company"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-0 top-[26px] mt-5 ml-5 text-[#cacaca]"
            />
          </div>
          {/* <div className="relative ml-5 w-full">
      // <input
      //   type="text"
      //   className="border mt-7 text-lg font-medium p-3 px-12 outline-none w-full"
      //   placeholder="All Job Specialties"
      // />
      // <CgUserList className="absolute left-0 top-[26px] mt-[14px] ml-[14px] w-7 h-7 text-[#cacaca]" />
      // <button onClick={handleDropdownClick}>
      //   {isDropdownOpen ? (
      //     <GrUp className="absolute right-0 top-[26px] mt-[14px] mr-[14px] w-5 h-7 text-[#cacaca]" />
      //   ) : (
      //     <GrDown className="absolute right-0 top-[26px] mt-[14px] mr-[14px] w-5 h-7 text-[#cacaca]" />
      //   )}
      // </button>
      // {isDropdownOpen && (
      //   <div className="w-[310px] h-60 bg-blue-600 mt-2 absolute"></div>
      // )}
    </div> */}
          <div className="relative ml-5 mt-[28px] w-full custom-select bg-none">
          
              <Select
                options={options}
                placeholder='Job'
                noOptionsMessage={() => "No Job Found"}
                clearable={true}
                isSearchable={true}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    height: '54px',
                    borderColor: '#cacaca',
                    paddingLeft: '40px',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    fontWeight: '500',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#aaaaaa',
                  }),
                }}
                value={selectedOption}
        onChange={handleSelectChange}
              />
      <CgUserList className="absolute left-0 bottom-[12px] ml-[14px] w-7 h-7 text-[#cacaca]" />
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
