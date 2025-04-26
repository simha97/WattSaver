import React from "react";
import { areas, Area } from "../constants";

interface AreaFormProps {
  settings: {
    area: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AreaForm: React.FC<AreaFormProps> = ({ settings, handleChange }) => {
  return (
    <fieldset className="block mb-2 mt-5">
      <legend className="text-lg font-bold">Välj ditt område:</legend>
      <div className="flex flex-col gap-2 md:flex-row">
        {areas.map((area: Area) => (
          <label
            key={area.code}
            htmlFor={area.code}
            className={`flex items-center gap-2 py-2 px-4 cursor-pointer rounded-lg shadow-lg transition-all duration-200 ${
              settings.area === area.code ? "bg-amber-300 " : "bg-yellow-50"
            }`}
          >
            <input
              id={area.code}
              type="radio"
              name="area"
              value={area.code}
              checked={settings.area === area.code}
              onChange={handleChange}
              className="absolute opacity-0 w-0 h-0"
            />
            {area.name}
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default AreaForm;
