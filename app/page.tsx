import Image from "next/image";
import { Inter } from "next/font/google";
import { BsBookmark, BsTwitter } from "react-icons/bs";
import { BiMoney, BiUser } from "react-icons/bi";
import { BiHomeCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";


import React, { ReactNode } from "react";

import { title } from "process";
import FeedCard from "@/components/FeedCard";
const inter=Inter({ subsets: ["latin"]})
interface TwitterSidebarButton {
    title: String;
   icon : React.ReactNode;
}

const sidebarMenuItems : TwitterSidebarButton[]=[
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash />
  },

  {
    title: "Notification",
    icon: <BsBell />
  },


  {
    title: "Message",
    icon: <BsEnvelope />
  },
  {
    title: "Bookmark",
    icon: <BsBookmark/>
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney/>
  },
  {
    title: "Profile",
    icon: <BiUser/>
  },
  {
    title: "More Option",
    icon: <SlOptions/>
  },
  
]
export default function Home() {
  return (
   <div className={inter.className}>

    <div className="grid grid-cols-12 h-screen w-screen px-56">
     <div className="col-span-3 pt-1 ml-4">
      <div className="text-2xl h-fit hover:bg-gray-800 rounded-full p-2  cursor-pointer transition-all w-fit ">
     <BsTwitter />
     </div>
     <div className="mt-1 text-xl pr-4">
      <ul>
        {sidebarMenuItems.map((item, index) => (
            <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2" key={index}>
            <span className="text-3xl">{item.icon}</span>
            <span>{item.title}</span>
        </li>
         ))}
        </ul>
        <div className="mt-5 pl-10">
         <button className="bg-sky-400 p-4 rounded-full w-full  text-lg py-2 px-4 font-semibold">Tweet</button>
         </div>
     </div>
     </div>
     <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-400">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
     </div>
     <div className="col-span-3"></div>


    </div>

   </div>
  );
}
