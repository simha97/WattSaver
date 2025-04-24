import React from "react";

interface TimeFormProps {
  settings: {
    time: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TimeForm: React.FC<TimeFormProps> = ({ settings, handleChange }) => {
  return (
    <div>
      <label htmlFor="hour" className="block mb-2 text-lg font-bold">
        Välj timme:
      </label>
      <div className="flex">
        <select
          id="hour"
          name="time"
          className="rounded-l-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2.5"
          value={settings.time}
          onChange={handleChange}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={String(i).padStart(2, "0")}>
              {String(i).padStart(2, "0")}:00
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimeForm;
