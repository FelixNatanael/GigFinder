import { React } from "react";
import { Link } from "react-router-dom";
import Foto from "../image/foto1.png";
import Popup from "reactjs-popup";

function Nav() {
  return (
    <div className="bg-[#6780B2] h-[65px] w-full text-white fixed top-0 left-0 z-50">
      <nav className="py-3">
        <Link to="/">
          <label className="text-2xl cursor-pointer leading-[40px] font-bold px-5">
            GigFinder
          </label>
        </Link>
        <ul className="float-right font-semibold text-lg">
          <div className="flex">
            <div className="flex m-2">
              <li className="px-2">
                <Link to="/Home">Home</Link>
              </li>
              <li className="px-2">
                <Link to="/lowongan">Vacancy</Link>
              </li>
              <li className="px-2">
                <Link to="/lowongan">Inbox</Link>
              </li>
            </div>
            <li className="pr-5">
              <Popup
                trigger={
                  <button>
                    <img src={Foto} className="w-[44px] rounded-full" alt="" />
                  </button>
                }
                position="bottom right"
              >
                <div className="w-60 h-32 drop-shadow-xl bg-white flex flex-col py-3 px-5 rounded">
                  <span className="font-semibold text-lg">Hi, Felix Na</span>
                  <span className="font-medium">Contributor</span>
                  <div className="mr-auto">
                    <Link to="/">
                      <button className="bg-blue-500 w-28 h-10 rounded-full mt-2 text-white font-semibold">
                        Logout
                      </button>
                    </Link>
                  </div>
                </div>
              </Popup>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
