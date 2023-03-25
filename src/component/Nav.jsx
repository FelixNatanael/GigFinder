import { React, useState } from "react";
import { Link } from "react-router-dom";
import Foto from "../image/foto1.png";
import Popup from "reactjs-popup";

function Nav() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }
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
              <li className={`${activeLink === '/Home' ? 'underline' : ''} px-2 `}>
          <Link to="/Home" onClick={() => handleLinkClick('/Home')}>Home</Link>
        </li>
        <li className={`${activeLink === '/lowongan' ? 'underline' : ''} px-2 `}>
          <Link to="/lowongan" onClick={() => handleLinkClick('/lowongan')}>Vacancy</Link>
        </li>
        <li className={`${activeLink === '/inbox' ? 'underline' : ''} px-2 `}>
          <Link to="/inbox" onClick={() => handleLinkClick('/inbox')}>Inbox</Link>
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
                <div className="w-72 h-36 drop-shadow-xl bg-white flex flex-col py-3 px-5 rounded">
                  <span className="font-bold text-xl">Hi, Felix Na</span>
                  <span className="font-medium text-lg mt-1">Contributor</span>
                  <div className="flex flex-row">
                    <div className="mr-auto">
                      <Link to="/">
                        <button className="bg-blue-500 w-28 h-10 rounded-full mt-4 text-white font-semibold">
                          Logout
                        </button>
                      </Link>
                    </div>
                    <div className="ml-auto">
                      <Link to="/premium">
                        <button className="bg-blue-500 w-28 h-10 mt-4 rounded-full text-white font-semibold">
                          Premium
                        </button>
                      </Link>
                    </div>
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
