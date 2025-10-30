import React, { useState } from "react";
import { seats } from "../utils/constant";
import { Armchair } from "phosphor-react";

export default function Booking() {
  const [currentSeats, setCurrentSeats] = useState(seats);
  const selectHandler = (seat) => {
    console.log("Selected Seat:", seat.row + seat.number);
    if (seat.isBooked) return;
    setCurrentSeats((prevSeats) =>
      prevSeats.map((s) =>
        s.id === seat.id ? { ...s, isSelected: !s.isSelected } : s
      )
    );
  };
  return (
    <section className="max-w-3xl mx-auto p-4 border border-gray-700 rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Book Your Seat</h1>
      <section className="flex gap-8">
        <div className="grid grid-cols-1 gap-2 ">
          {["A", "B", "C", "D", "E"].map((row) => (
            <div
              key={row}
              className="flex items-center justify-center h-8 w-8 text-gray-500 text-sm"
            >
              {row}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-2 w-full">
          {currentSeats.map((seat) => (
            <button
              key={seat.id}
              className={`cursor-pointer hover:bg-[#ffffff7d] ${
                seat.isSelected ? "bg-[#ffffff3d]" : ""
              }`}
              onClick={() => selectHandler(seat)}
            >
              <div className="flex justify-center">
                {seat.isBooked ? (
                  <Armchair size={32} className="text-red-800" />
                ) : (
                  <Armchair size={32} />
                )}
              </div>
            </button>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center mt-24">
        <h2 className="text-xs font-semibold  w-[550px] bg-blue-100 text-blue-500 rounded">
          SCREEN
        </h2>
      </div>
    </section>
  );
}
