import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const Navbar2 = () => {
  return (
    <div className="hidden lg:inline-flex">
      <div className="bg-[#222539] px-36 py-2 text-blue-gray-100 text-sm grid grid-cols-4">
        <div className="col-span-3 flex gap-4 list-none ">
          <li>
            <NavLink
              to="/MoviesPage"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/streams"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Streams
              <sup>
                <Badge bg="danger" className="ml-1 ">
                  New
                </Badge>
              </sup>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plays"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Plays
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buzz"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Buzz
            </NavLink>
          </li>
        </div>
        <div className="flex gap-4 col-auto pr-7 list-none">
          <li>
            <NavLink
              to="/Listshow"
              className="no-underline text-blue-gray-100 hover:text-white flex items-center"
            >
              ListYourShow
              <sup>
                <Badge bg="danger" className="ml-1 ">
                  New
                </Badge>
              </sup>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/corporates"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Corporates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/streams"
              className="no-underline text-blue-gray-100 hover:text-white"
            >
              GiftCards
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
