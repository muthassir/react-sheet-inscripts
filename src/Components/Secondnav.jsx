import React from "react";
import { FaRegEyeSlash, FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { TbViewportWide } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { FaRegShareSquare } from "react-icons/fa";
import { MdOutlineAltRoute } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b-grey">
      <div className="flex-1 flex items-center gap-3 ">
        <a
          className="btn btn-ghost text-[14px]"
          onClick={()=>console.log("clicked Toolbar")}
        >
          Toolbar &gt;&gt;{" "}
        </a>
        <a
          className="flex items-center gap-1 cursor-pointer"
          onClick={()=>console.log("clicked hide fields")}
        >
          <FaRegEyeSlash />
          hide fields
        </a>
        <a
          className="ml-4 flex items-center gap-1 cursor-pointer"
          onClick={()=>console.log("clicked sort")}
        >
          <FaArrowRightArrowLeft />
          sort
        </a>
        <a
          className="ml-4 flex items-center gap-1 cursor-pointer"
          onClick={()=>console.log("clicked filter")}
        >
          <IoFilterOutline />
          filter
        </a>
        <a
          className="ml-4 flex items-center gap-1 cursor-pointer"
          onClick={()=>console.log("clicked cell view ")}
        >
          <TbViewportWide />
          Cell view
        </a>
        {/* divided part */}
      </div>
      <div className="flex gap-2">
        <a
          className="flex items-center gap-1 btn rounded cursor-pointer"
          onClick={()=>console.log("clicked import")}
        >
          <TfiDownload />
          import
        </a>
        <a
          className="flex items-center gap-1 btn rounded cursor-pointer"
          onClick={()=>console.log("clicked export")}
           
        >
          <TfiDownload style={{transform: 'rotate(180deg'}} />
          export
        </a>
        <a
          className="flex items-center gap-1 btn rounded cursor-pointer"
          onClick={()=>console.log("clicked share")}
        >
          <FaRegShareSquare />
          share
        </a>

        {/* alert */}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-900 rounded cursor-pointer"
          >
            <button className="  text-white p-2 cursor-pointer flex items-center gap-1 ">
              <MdOutlineAltRoute style={{ transform: "rotate(180deg)" }} />
              New Action
            </button>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li onClick={()=>console.log("clicked new")}>
              <a className="justify-center">
                <span className="badge">New +</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
