
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export function MyDatePicker({ selected, onSelect }) {
  return (
    <DayPicker
      mode="single"
      animate
      selected={selected}
      onSelect={onSelect}
      disabled={[{dayOfWeek:[0, 6]}, {before:new Date()}]}
      className="mt-[3rem]"
      footer={
        selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "Pick a day."
      }
    />
  );
}
