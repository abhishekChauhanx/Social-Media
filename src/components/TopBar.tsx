import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router";

const TopBar = () => {
  return (
    <div className="container sticky top-0 flex items-center justify-center w-full h-12 text-black bg-blue-400 z-[44534]">
      <div className="flex-[3] relative">
        <span className="logo text-[24px] font-extrabold  ml-[10px] cursor-pointer text-white absolute top-[-60px]">
          <NavLink to="/">
            {" "}
            <img
              src="../../pubic/assets/people/zoker1.png"
              alt=""
              className="h-[125px] w-[135px] object-cover  "
            />{" "}
          </NavLink>
        </span>
      </div>
      <div className="flex-[5]">
        <div className="w-full  flex items-center h-[30px]  rounded-lg   search">
          <IoSearchCircleSharp className="text-[40px] ml-[10px]" />
          <input
            type="text"
            className="border-none searchInput w-[50%] rounded-lg outline-none  p-2"
            placeholder="Search• • "
          />
        </div>
      </div>
      <div className=" flex-[4] right flex items-center justify-around text-white ">
        <div className="links-container">
          <NavLink to="/login">
            <span className="font-bold text-red-700 links">Log In ?</span>
          </NavLink>
          <span className="links">Timeline</span>
        </div>
        <div className="flex justify-between icons w-[120px]">
          <div className="icons-items">
            <IoPerson className="inline-block text-[20px]" />
            <span className="icons-bages">1</span>
          </div>
          <div className="icons-items">
            <FaRocketchat className="inline-block text-[20px]" />
            <span className="icons-bages">2</span>
          </div>
          <div className="icons-items">
            <MdNotificationsActive className="inline-block text-[20px]" />
            <span className="icons-bages">1</span>
          </div>
        </div>
        <NavLink to="/profile">
          <img
            src="../../pubic/assets/people/10.jpg"
            className="h-[32px] w-[32px] object-cover cursor-pointer rounded-[50%]"
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
