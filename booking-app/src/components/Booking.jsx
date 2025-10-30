import React from "react";
import { seats } from "../utils/constant";
import { Armchair } from "phosphor-react";

export default function Booking() {
  return (
    <section className="max-w-3xl mx-auto p-4 border border-gray-700 rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Book Your Seat</h1>
      <section className="flex">
        <div className="grid grid-cols-1 gap-2 ">
          {["A", "B"].map((row) => (
            <div key={row} className="flex items-center justify-center h-8 w-8">
              {row}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-2 w-full">
          {seats.map((seat) => (
            <button key={seat.id}>
              <div className="flex justify-center">
                <Armchair size={32} />
              </div>
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}
