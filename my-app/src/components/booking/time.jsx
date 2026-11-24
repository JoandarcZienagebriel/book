import { useState } from "react";

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export default function Time({ value, onChange, bookedTime }) {
const [selected, setSelected] = useState()
  return (
    <div className="grid grid-cols-3 mt-8">
      {timeSlots.map((item) => {

        const isBooked = bookedTime.some(
          (booking) => booking.time.slice(0, 5) === item
        );

        return (
          <button
            key={item}
            type="button"
            disabled={isBooked}
            onClick={() =>{onChange(item);
              setSelected(item);
              
            }}

            className={`border border-2 p-4 m-2 text-[#273138]
              border-primary
              ${isBooked
                ? "bg-gray-400 text-gray-500 border border-gray-400 cursor-not-allowed"
                : "bg-accent hover:bg-accent"
              } ${selected===item ? 'bg-accent hover:bg-accent border border-accent' :'bg-white'}`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

