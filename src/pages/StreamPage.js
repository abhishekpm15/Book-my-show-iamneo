import React from "react";
// import Carousels from "../components/Carousels";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import StreamCarousels from "../components/StreamCarousel";

const StreamPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="bg-[#ebebeb]">
        <StreamCarousels />
      </div>
    </div>
  );
};

export default StreamPage;
