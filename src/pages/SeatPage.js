import React from "react";
import Seat from "../components/Seat";
const SeatPage = () => {
  return (
    <div className="flex">
      <div className="flex ml-28 mt-4">
        <Seat row={"A"}/>
        <Seat row={"B"}/>
        <Seat row={"C"}/>
        <Seat row={"D"}/>
      </div>
      <div className="flex ml-28 mt-4">
        <Seat row={"E"}/>
        <Seat row={"F"}/>
        <Seat row={"G"}/>
        <Seat row={"H"}/>
      </div>
      <div className="flex ml-28 mt-4">
        <Seat row={"I"}/>
        <Seat row={"J"}/>
        <Seat row={"K"}/>
        <Seat row={"L"}/>
      </div>
      <div className="flex ml-28 mt-4">
        <Seat row={"M"}/>
        <Seat row={"N"}/>
        <Seat row={"O"}/>
        <Seat row={"P"}/>
      </div>
      <div className="flex ml-28 mt-4">
        <Seat row={"Q"}/>
        <Seat row={"R"}/>
        <Seat row={"S"}/>
        <Seat row={"T"}/>
      </div>
      <div className="flex ml-28 mt-4">
        <Seat row={"A"}/>
        <Seat row={"A"}/>
        <Seat row={"A"}/>
        <Seat row={"A"}/>
      </div>

    </div>
  );
};

export default SeatPage;
