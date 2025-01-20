"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

interface Props {
  onFilter: (filter: string) => void;
}

export const FilterInput = ({ onFilter }: Props) => {
  const [filter, setFilter] = useState("");

  const handleFilter = () => {
    onFilter(filter);
  };

  return (
    <div className="flex flex-auto justify-center gap-6">
      <Input
        value={filter}
        onChange={setFilter}
        placeholder="Filter characters by name"
        className="w-2/6 flex pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
      />
      <Button onClick={handleFilter} label="Filter" />
    </div>
  );
};
