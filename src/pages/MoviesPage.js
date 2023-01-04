import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Carousels from "../components/Carousels";
// import Dropdown from 'react-bootstrap/Dropdown';

const MoviesPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="bg-[#ebebeb]">
        <Carousels />
      </div>
      <div className="flex pl-28 pt-8">
            <div className="text-2xl font-bold">
                Filters
            </div>
            <div>
            {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            </div>
      </div>
    </div>
  );
};

export default MoviesPage;
