export default function Summary({ seats }) {
  const selectedSeats = seats.filter((seat) => seat.isSelected);
  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold mb-4">Summary</h1>
      <p className="mb-2">
        Selected Seats:{" "}
        {selectedSeats.length > 0
          ? selectedSeats.map((seat) => seat.row + seat.number).join(", ")
          : "None"}
      </p>
      <p className="mb-4">Total Price: ₹ {totalPrice}</p>
      <button
        className="px-5 py-1 rounded ring bg-blue-600 hover:bg-blue-500 ease-in cursor-pointer"
        disabled
      >
        Book Seats
      </button>
    </div>
  );
}
