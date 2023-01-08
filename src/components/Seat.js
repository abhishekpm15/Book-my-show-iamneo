import React, { useState } from "react";

const Seat = (props) => {
    const [seats,setSeats] = useState(0);
    // const [totalseats, setTotalSeats] = useState(seats);
  const list = ["1", "2", "3", "4", "5", "6"];
  return (
    <div>
      {list.map((seat, index) => {
        return (
          <>
            <div className="w-5 h-10 bg-red-700 mt-3 ml-3 text-white rounded-lg flex justify-center items-center hover:bg-green-500 cursor-pointer px-3" onClick={()=>{setSeats(seats+1)}}>
                {
                    list[index]
                }
            </div>
            <div className="ml-6">
                {props.row}
            </div>
            <div>
                {/* {seats} */}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Seat;
