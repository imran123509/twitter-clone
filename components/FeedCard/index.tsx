import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";


const FeedCard : React.FC = () =>{
      return <div className="border border-l-0 border-r-0 border-b-0 p-5 border-gray-600 p4 hover:bg-slate-900 transition-all cursor-pointer">
          <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1">
                 <Image src="https://avatars.githubusercontent.com/u/72485040?v=4" alt="user image" height={50} width={50} />
              </div>
              <div className="col-span-11">
                <h5> Imran Hassan</h5>
                <p>
                    learmsfsmf
                    fnljsgkdkgdgndklglkhgrhlrkhrlhkflhfkhmthlthlt
                    fdsgkjngiuruhtgrtgdhiu
                </p>
                <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
               <div><BiMessageRounded /></div> 
               <div><AiOutlineRetweet /></div>
               <div><FaHeart /></div>
               <div><FaArrowUpLong /></div>
                </div>
              </div>
          </div>
      </div>
}

export default FeedCard