"use client";

import { PropertyDropdown } from "../chart/PropertyDropdown";
import { CharactersPieChart } from "../chart/CharactersPieChart";
import { Character } from "@/interfaces";
import { getPieChartDataFromCharacters } from "@/helpers/chart-data/data";
import { useState } from "react";

interface Props {
  characters: Character[];
}

export const CharactersAnalysis = ({ characters }: Props) => {
  const [property, setProperty] = useState<keyof Character>("gender");
  const pieChartData = getPieChartDataFromCharacters(characters, property);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="w-3/5 bg-white p-8 shadow-lg rounded-lg">
        <PropertyDropdown onPropertyChange={setProperty} />
        <CharactersPieChart chartData={pieChartData} property={property} />
      </div>
    </div>
  );
};
