import React from "react";

const Navbar2 = () => {
  return (
    <div>
      <div className="bg-[#222539] px-36 py-2 text-blue-gray-100 text-sm grid grid-cols-4">
        <div className="col-span-3 flex gap-4">
          <li className="inline">Movies</li>
          <li className="inline">Streams</li>
          <li className="inline">Events</li>
          <li className="inline">Plays</li>
          <li className="inline">Sports</li>
          <li className="inline">Activities</li>
          <li className="inline">Buzz</li>
        </div>
        <div className="flex gap-4 col-auto pr-7">
          <li className="inline">ListYourShow</li>
          <li className="inline">Corporates</li>
          <li className="inline">Offers</li>
          <li className="inline">GiftCards</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
