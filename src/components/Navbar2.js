import React from "react";

const Navbar2 = () => {
  return (
    <div>
      <div className="bg-[#222539] px-36 py-2 text-blue-gray-100 text-sm grid grid-cols-4">
      <div className="col-span-3 flex gap-4 list-none">
        <li>Movies</li>
        <li>Streams</li>
        <li>Events</li>
        <li>Plays</li>
        <li>Sports</li>
        <li>Activities</li>
        <li>Buzz</li>
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
