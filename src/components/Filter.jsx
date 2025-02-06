import React, { useContext } from "react";
import { data } from "../App";

export const Filter = () => {
  const { handleFilter } = useContext(data);
  return (
    <div>
      <select
        onChange={(e) => handleFilter(e.target.value)}
        className="border-2 border-black px-4 py-2 rounded"
      >
        <option value="">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </div>
  );
};
