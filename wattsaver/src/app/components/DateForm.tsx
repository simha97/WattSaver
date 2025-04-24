import React from "react";
import { getTodayAndTomorrow } from "../constants";

interface DateFormProps {
  settings: {
    date: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateForm: React.FC<DateFormProps> = ({ settings, handleChange }) => {
  const dateArray = getTodayAndTomorrow();

  return (
    <div className="block mt-6 mb-5">
      <label className="text-lg font-bold">Välj dag:</label>
      <div className="flex gap-2">
        {dateArray.map((day) => (
          <label
            key={day.label}
            className={`flex items-center gap-2 py-2 px-5 cursor-pointer rounded-lg shadow-lg transition-all duration-200 ${
              settings.date === day.date ? "bg-amber-300 " : "bg-yellow-50"
            }`}
          >
            <input
              type="radio"
              name="date"
              value={day.date}
              checked={settings.date === day.date}
              onChange={handleChange}
              className="hidden"
            />
            {day.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DateForm;
