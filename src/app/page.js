"use client";

import { marketData } from "@/constants/MarketData";
import { disscussionData } from "@/constants/DiscussionData";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [isDiscussion, setIsDiscussion] = useState(true);
  return (
    <>
      <div className="col-span-5 max-md:hidden flex justify-evenly align-middle ">
        <div className="col-span-3">
          <h1 className="p-4 text-3xl font-bold bg-slate-300 text-red-500">
            Discussion Fourm
          </h1>
          {disscussionData.map((data) => {
            return (
              <div
                key={data.id}
                className="box-border flex flex-col border-2 border-black p-3 mt-3"
              >
                <div className="flex justify-between">
                  <div className="flex align-middle">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-profile-417-1163876.png"
                      alt="user"
                      className="w-10"
                    />
                    <span className="p-2 font-bold">{data.name}</span>
                    <span className="m-1 pl-3 text-white bg-blue-500 rounded-3xl w-20 h-6">
                      {" "}
                      Sector {data.sector}
                    </span>
                  </div>
                  <p className="text-blue-500">{data.time}</p>
                </div>
                <p className="p-2 pl-8">{data.description}</p>
                <div>
                  <ul className="flex justify-evenly">
                    <li className="flex ">
                      <IoMdHeartEmpty className="text-2xl" />
                      <span className="pl-1"> {data.like}</span>
                    </li>
                    <li className="flex">
                      <MdOutlineRemoveRedEye className="text-2xl" />
                      <span className="pl-1">{data.views}</span>
                    </li>
                    <li className="flex">
                      <BiComment className="text-2xl" />
                      <span className="pl-1">{data.comment} Comments</span>
                    </li>
                    <li className="flex">
                      <FiShare2 className="text-2xl" />
                      <span className="pl-1">Share</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-2 ml-6">
          <h1 className="p-4 text-3xl font-bold bg-slate-300 text-red-500">
            Market Stories
          </h1>

          {marketData.map((data) => {
            return (
              <div key={data.id}>
                <div className="border-black border-2 w-72 m-auto mt-3">
                  <img
                    src={data.img_url}
                    alt="this is img"
                    srcset=""
                    className=""
                  />
                  <div className="p-2">
                    <h2 className="text-lg font-bold">{data.title}</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-screen md:hidden -ml-16">
        <div className="flex justify-evenly bg-blue-900 text-2xl text-white">
          <buttoon onClick={()=>{setIsDiscussion(true)}} className=  {`w-full ml-3 p-2 ${isDiscussion?'border-r-4 border-b-4 border-red-950 bg-blue-950':''}`}>
            Discussion Forum
          </buttoon>
          <button onClick={()=>{setIsDiscussion(false)}} className={`-ml-4 w-full p-2 ${!isDiscussion?'border-l-4 border-b-4 border-red-950 bg-blue-950':''}`}>
            Market Story
          </button>
        </div>
        <div className={`${isDiscussion?'visible':'hidden'}`}>
          {disscussionData.map((data) => {
            return (
              <div
                key={data.id}
                className="box-border flex flex-col w-[90%] p-3 mt-3 ml-6 shadow-lg" 
              >
                <div className="flex justify-between">
                  <div className="flex align-middle">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-profile-417-1163876.png"
                      alt="user"
                      className="w-10"
                    />
                    <span className="p-2 font-bold">{data.name}</span>
                    <span className="m-1 pl-3 text-white bg-blue-500 rounded-3xl w-20 h-6">
                      Sector {data.sector}
                    </span>
                  </div>
                  <p className="text-blue-500">{data.time}</p>
                </div>
                <p className="p-2 pl-8">{data.description}</p>
                <div>
                  <ul className="flex justify-evenly">
                    <li className="flex ">
                      <IoMdHeartEmpty className="text-2xl" />
                      <span className="pl-1"> {data.like}</span>
                    </li>
                    <li className="flex">
                      <MdOutlineRemoveRedEye className="text-2xl" />
                      <span className="pl-1">{data.views}</span>
                    </li>
                    <li className="flex">
                      <BiComment className="text-2xl" />
                      <span className="pl-1">{data.comment} Comments</span>
                    </li>
                    <li className="flex">
                      <FiShare2 className="text-2xl" />
                      <span className="pl-1">Share</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`${isDiscussion?'hidden':'visible'}`}>
          {marketData.map((data) => {
            return (
              <div key={data.id}>
                <div className="border-black border-2 w-72 max-md:w-[88%] m-auto mt-3">
                  <img
                    src={data.img_url}
                    alt="this is img"
                    srcset=""
                    className=""
                  />
                  <div className="p-2">
                    <h2 className="text-lg font-bold">{data.title}</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
