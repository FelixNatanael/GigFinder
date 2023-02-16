import React from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
import Nav from "../component/Nav";
import Foto from "../image/foto1.png";
import Foto2 from "../image/foto2.png";
import Foto3 from "../image/foto3.png";
import Foto4 from "../image/foto4.png";

function Home() {
  return (
    <div>
      <Nav />
      <div>
      <div className="back text-white relative flex flex-col justify-center px-[116px]">
        <span className="text-4xl font-bold">Carilah Pekerjaan yang</span>
        <span className="text-4xl font-bold">anda inginkan sekarang</span>
        <span className="text-4xl font-bold">juga</span>
        <Link to="/lowongan">
          <button className="bg-[#FDC73B] mt-10 w-[18rem] text-2xl font-bold h-16">
            Cari Pekerjaan
          </button>
        </Link>
      </div>
      <div className="text-black px-20 pt-10 max-h-20 flex flex-col">
        <span className="text-4xl font-bold ">List-List Lowongan</span>
        <div className="flex flex-row border-b-2">
          <div className="flex flex-col mr-10">
            <img src={Foto} alt="" className="pt-10 pb-5 w-60" />
            <label className="text-xl font-semibold">Web Programming</label>
          </div>
          <div className="flex flex-col mr-10">
            <img src={Foto2} alt="" className="pt-10 pb-5 w-60" />
            <label className="text-xl font-semibold">Web Designing</label>
          </div>
          <div className="flex flex-col mr-10">
            <img src={Foto3} alt="" className="pt-10 pb-5 w-60" />
            <label className="text-xl font-semibold">Acounting</label>
          </div>
          <div className="flex flex-col mr-10 mb-10">
            <img src={Foto4} alt="" className="pt-10 pb-5 w-60" />
            <label className="text-xl font-semibold">Marketing</label>
          </div>
        </div>
        <div className="pt-10 pb-80">
          <span className="text-4xl font-bold">Kategori Pekerjaan</span>
        </div>
      </div></div>
    </div>
  );
}

export default Home;
