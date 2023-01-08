import React, { useState } from "react";
import { MdChair } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

const Seat = ({ row, setSeatsSelected, seatsSelected }) => {
  return (
    <div className="flex items-center justify-center space-x-10">
      <div className="font-bold text-2xl">{row}</div>
      <div className="flex items-center space-x-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((seatNumber) => {
          return (
            <SingleSeat
              seatNumber={seatNumber}
              seatsSelected={seatsSelected}
              setSeatsSelected={setSeatsSelected}
              row={row}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Seat;

const SingleSeat = ({ seatNumber, setSeatsSelected, seatsSelected, row }) => {
  const { api } = useAuth();
  const [selectedSeat, setSelectedSeat] = useState(false);

  const onSeatClick = () => {
    if (seatsSelected?.length > 9 && !selectedSeat) {
      api.error({
        message: "Error",
        description: "You can select only 10 seats",
        duration: 2000,
      });
      return;
    }
    setSelectedSeat(!selectedSeat);
    if (selectedSeat) {
      const filteredSeats = seatsSelected.filter(
        (seat) => seat !== `${row}-${seatNumber}`
      );
      setSeatsSelected(filteredSeats);
    } else {
      setSeatsSelected([...seatsSelected, `${row}-${seatNumber}`]);
    }
  };
  return (
    <MdChair
      onClick={onSeatClick}
      className={`seat ${selectedSeat && "seat-selected"}`}
    />
  );
};
