import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <div className="bg-[#222539] px-36 py-2 text-blue-gray-100 text-sm grid grid-cols-4">
      <div className="col-span-3 flex gap-4 list-none ">
        <li><Link to="/movies" className="no-underline text-blue-gray-100 hover:text-white">Movies</Link></li>
        <li><Link to="/streams" className="no-underline text-blue-gray-100 hover:text-white">Streams</Link></li>
        <li><Link to="/events" className="no-underline text-blue-gray-100 hover:text-white">Events</Link></li>
        <li><Link to="/plays" className="no-underline text-blue-gray-100 hover:text-white">Plays</Link></li>
        <li><Link to="/sports" className="no-underline text-blue-gray-100 hover:text-white">Sports</Link></li>
        <li><Link to="/activities" className="no-underline text-blue-gray-100 hover:text-white">Activities</Link></li>
        <li><Link to="/buzz" className="no-underline text-blue-gray-100 hover:text-white">Buzz</Link></li>
    </div>
        <div className="flex gap-4 col-auto pr-7 list-none">
          <li>ListYourShow</li>
          <li>Corporates</li>
          <li>Offers</li>
          <li>GiftCards</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
