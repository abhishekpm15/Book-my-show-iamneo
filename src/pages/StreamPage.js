import React from "react";
import Movies from "../components/Movies";
import Events from "../components/Events";
import {imageLink,preimerLink,eventLink,eventsHappeningLink,streamingLink,outdoorLink,laughterLink,popularLink,thelatestLink} from "../Links/StreamLinks"


const StreamPage = () => {
  

  return (
    <div>
      <div className="bg-[#f5f5f5] mt-2">
        <div className="recommended ml-24 mr-28 pt-7 pl-10">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Recommened Movies
          </div>
          <div className="">
            <Movies objects={imageLink} />
          </div>
        </div>

        <div className="mt-14 mb-10 pt-5 pb-5 bg-[#1f253a] ">
              <div className="text-2xl font-bold text-white ml-56">Premieres
              <div className="list-none flex space-x-6 mt-4 ">
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-2  hover:border-red-500 text-white bg-red-400">0 - 50/-</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-2  hover:border-red-500 text-white bg-red-400">51 - 100/-</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-2  hover:border-red-500 text-white bg-red-400">100 - 200/-</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-2  hover:border-red-500 text-white bg-red-400">200 - 350/-</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-2  hover:border-red-500 text-white bg-red-400">351 - 550/-</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-2  hover:border-red-500 text-white bg-red-400">550+</button></li>
            </div>
            </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3 mb-5">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Events Happening Near You
          </div>
          <div className="">
            <Movies objects={eventsHappeningLink} />
          </div>
        </div>


        <div className="recommended ml-24 mr-28 pt-7 pl-10">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            The Best Of Live Events
          </div>
          <div className="">
            <Events objects2={eventLink} />
          </div>
        </div>

        <div className="bg-[#2b3149] mt-24">
          <div className=" ml-24 mr-28 pt-7 pl-10 pb-5">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt="preimiere-img"
            />
            <div className="text-2xl font-bold text-white">Premieres</div>
            <p className="text-white">Brand new releases every friday </p>
            <div className=" text-white">
              <Movies objects={preimerLink} />
            </div>  
          </div>
        </div>

        <div className="mt-14 mb-10 pt-5 pb-5 bg-[#1f253a] ">
              <div className="text-2xl font-bold text-white ml-56">Browse movies by Languages
              <div className="list-none flex space-x-6 mt-4 ">
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-4  hover:border-red-500 text-white bg-red-400">English</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-4  hover:border-red-500 text-white bg-red-400">Hindi</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-4  hover:border-red-500 text-white bg-red-400">Regional</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-4  hover:border-red-500 text-white bg-red-400">Foreign</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-4 hover:border-red-500 text-white bg-red-400">Telugu</button></li>
                <li><button className=" rounded-full hover:text-red-500 text-sm p-1 px-4  hover:border-red-500 text-white bg-red-400">Malayalam</button></li>
            </div>
            </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Online Streaming Events
          </div>
          <div className="">
            <Movies objects={streamingLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Outdoor Events
          </div>
          <div className="">
            <Movies objects={outdoorLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Laughter Therapy
          </div>
          <div className="">
            <Movies objects={laughterLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Online Streaming Events
          </div>
          <div className="">
            <Movies objects={popularLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            The Latest Plays
          </div>
          <div className="">
            <Movies objects={thelatestLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
