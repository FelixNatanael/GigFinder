import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="bg-[#3B89FD] h-[65px] w-full text-white">
        <nav className="py-3">
        <label className="text-2xl leading-[40px] font-bold px-5">
          GigFinder
        </label>
        <ul className="float-right font-semibold text-lg">
          <div className="flex m-2">
            <li className="px-2">
              <Link to="Home">Home</Link>
            </li>
            <li className="px-2">Lowongan</li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Nav