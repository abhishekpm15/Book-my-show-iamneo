import React from "react";
// import Carousels from "../components/Carousels";
import Events from "../components/Events";
import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";
const EventPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="bg-[#ebebeb]">
        <Events />
      </div>
    </div>
  );
};

export default EventPage;
