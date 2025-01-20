'use client'

import { useState } from "react";

interface Props {
    onFilter: (filter:string) => void
}

export const FilterInput = ({onFilter}: Props) => {
    const [filter, setFilter] = useState("")

    const handleFilter = () => {
        onFilter(filter)
    }

    return (
    <div className="flex flex-auto justify-center gap-6">
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className=" w-2/6 flex pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Filter characters by name"
      />
      <button
        type="submit"
        className="btn-primary"
        onClick={() => handleFilter()}
      >
        Filter
      </button>
    </div>
  );
};
