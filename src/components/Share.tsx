import React from "react";
import { MdPermMedia } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
const Share = () => {
  return (
    <div className="w-full h-[170px] rounded-lg shadow-[5px_6px_14px_-6px_rgba(255,255,255,1)]">
      <div className="p-2">
        <div className="flex items-center share-Top">
          <img
            src="../../pubic/assets/people/10.jpg"
            alt=""
            className="w-[50px] h-[50px] rounded-[50%] object-cover mr-5 "
          />
          <input
            type="text"
            placeholder="What are you thinking ? "
            className="outline-none w-[80%] rounded-lg placeholder:text-white bg-black border-white"
          />
        </div>
        <hr className="m-5" />

        <div className="flex items-center justify-between ">
          <div className="flex ml-[20px] w-[60%] justify-around">
            <div className="flex items-center cursor-pointer option mr-[15px] ">
              <MdPermMedia className="inline-block share-icon text-[18px] mr-1 text-red-600" />
              <span className="share-option-Text">Photos or Videos</span>
            </div>
            <div className="flex items-center cursor-pointer option mr-[15px]">
              <FaTags className="inline-block share-icon text-[18px] mr-1 text-blue-500" />
              <span className="share-option-Text">Tag</span>
            </div>
            <div className="flex items-center cursor-pointer option mr-[15px]">
              <FaLocationDot className="inline-block share-icon text-[18px] mr-1 text-amber-700 " />
              <span className="share-option-Text">Location</span>
            </div>
            <div className="flex items-center cursor-pointer option mr-[15px]">
              <MdEmojiEmotions className="inline-block share-icon text-[18px] mr-1 text-pink-600" />
              <span className="share-option-Text">Feeling</span>
            </div>
          </div>
          <button className="sharBtn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
