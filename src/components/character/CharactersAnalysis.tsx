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
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="w-4/5 p-8 shadow-2xl rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-10">
          Character Statistics
        </h1>
        <PropertyDropdown onPropertyChange={setProperty} />
        <CharactersPieChart chartData={pieChartData} property={property} />
      </div>
    </div>
  );
};
