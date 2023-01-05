import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Movies from "../components/Movies";
import Events from "../components/Events";
import Carousels from "../components/Carousels";
import {imageLink,preimerLink,eventLink,eventsHappeningLink,streamingLink,outdoorLink,laughterLink,popularLink,thelatestLink} from "./ImageLinks"

const HomePage = () => {
  

  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="bg-[#ebebeb]">
        <Carousels />
      </div>

      <div className="bg-[#f5f5f5] mt-2">
        <div className="recommended ml-24 mr-28 pt-7 pl-10">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Recommened Movies
          </div>
          <div className="">
            <Movies objects={imageLink} />
          </div>
        </div>

        <div className="ml-36 pt-28 pl-30 pb-14 pr-30 w-[80%]">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt=""
            width="100%"
            height="100%"
          />
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

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Events Happening Near You
          </div>
          <div className="">
            <Movies objects={eventsHappeningLink} />
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

export default HomePage;
