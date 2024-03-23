'use client'
import Image from "next/image";
import { PiUserCircleFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { BsChatRightText } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";
import { useState } from "react";
export default function Slider() {
    const [isSliderOpen,setIsSliderOpen] = useState(true);
    const handelSlider = ()=>{
        setIsSliderOpen(isSliderOpen=>{
            return !isSliderOpen;
        });
    }
  return (
    <div className="flex z-10 fixed">
      <div className={`bg-blue-950 ${!isSliderOpen?'hidden':''} flex col-span-1 max-md:col-span-3 flex-col h-screen `}>
        <div className="flex justify-between p-4">
          <div className="flex ">
            {/* <Image src={} alt="user" /> */}
            <PiUserCircleFill className="text-5xl text-white" />
            <span className="font-bold text-xl pt-3 text-white">
              Hello, User
            </span>
          </div>
          <IoMdNotifications className="text-3xl mt-2 text-white" />
        </div>
        <div className="w-full h-1 bg-gray-700 "></div>
        <div>
          <ul className="text-xl text-white p-3">
            <li className="flex p-3 cursor-pointer">
              <BsChatRightText />
              <span className="pl-4">Discussion Fourm</span>
            </li>
            <li className="flex p-3 cursor-pointer">
              <AiFillDollarCircle />
              <span className="pl-4">Market Stories</span>
            </li>
            <li className="p-3 pl-12 cursor-pointer">Sentiments</li>
            <li className="p-3 pl-12 cursor-pointer">Market</li>
            <li className="p-3 pl-12 cursor-pointer">Sector</li>
            <li className="p-3 pl-12 cursor-pointer">Watchlist</li>
            <li className="p-3 pl-12 cursor-pointer">Events</li>
            <li className="p-3 pl-12 cursor-pointer">News/Interview</li>
          </ul>
        </div>
      </div>
      <div className="w-3 h-screen pt-80 ">
        <button className=" h-16 bg-blue-950 text-white" onClick={handelSlider}>
          <MdPlayArrow/>
        </button>
      </div>
    </div>
  );
}
