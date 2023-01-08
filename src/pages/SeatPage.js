import React from "react";
import Seat from "../components/Seat";
import { useNavigate } from "react-router-dom";
const SeatPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <div className="flex ml-28 mt-4">
          <Seat row={"A"} />
          <Seat row={"B"} />
          <Seat row={"C"} />
          <Seat row={"D"} />
        </div>
        <div className="flex ml-28 mt-4">
          <Seat row={"E"} />
          <Seat row={"F"} />
          <Seat row={"G"} />
          <Seat row={"H"} />
        </div>
        <div className="flex ml-28 mt-4">
          <Seat row={"I"} />
          <Seat row={"J"} />
          <Seat row={"K"} />
          <Seat row={"L"} />
        </div>
        <div className="flex ml-28 mt-4">
          <Seat row={"M"} />
          <Seat row={"N"} />
          <Seat row={"O"} />
          <Seat row={"P"} />
        </div>
        <div className="flex ml-28 mt-4">
          <Seat row={"Q"} />
          <Seat row={"R"} />
          <Seat row={"S"} />
          <Seat row={"T"} />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className=" text-red-700 px-3 py-2 inline-flex rounded-lg border-2 border-red-600 hover:bg-red-700 hover:text-white">
          <button className=" " onClick={()=>{navigate("/checkout")}}>CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default SeatPage;
