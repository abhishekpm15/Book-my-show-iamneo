import React, { useState } from "react";
import Seat from "../components/Seat";

import { useNavigate } from "react-router-dom";
const SeatPage = () => {
  const navigate = useNavigate();
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  const [seatsSelected, setSeatsSelected] = useState([]);
  return (
    <>
      <div className="p-10 space-y-5 flex flex-col justify-center">
        {rows.map((row) => {
          return (
            <Seat
              seatsSelected={seatsSelected}
              setSeatsSelected={setSeatsSelected}
              row={row}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/checkout", { state: { seatsSelected } })}
          disabled={seatsSelected?.length === 0}
          className="border disabled:bg-gray-400 disabled:scale-100 hover:scale-105 active:scale-75 duration-100 ease-out px-4 py-2 bg-bookMyShowPink rounded-md text-white font-bold"
        >
          Proceed with {seatsSelected?.length} selected
        </button>
      </div>
    </>
  );
};

export default SeatPage;
