import { Character } from "@/interfaces";
import { PieChartData } from "@/interfaces/chart-data/ChartData";

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

export const getCountCharactersObjectByProperty = (
  characters: Character[],
  property: keyof Character
) => {
  const result: Record<string, number> = {};
  characters.forEach((character) => {
    const key = character[property] as string;
    result[key] = (result[key] || 0) + 1;
  });
  return result;
};

export const convertCountCharactersObjectToChartStructure = (
  countCharactersObject: Record<string, number>,
  property: keyof Character
): PieChartData[] => {
  return Object.entries(countCharactersObject).map(([key, count]) => ({
    [property]: key,
    count,
    fill: getRandomColor(),
  }));
};

export const getPieChartDataFromCharacters = (characters: Character[], property: keyof Character): PieChartData[] => {
    const charactersCount = getCountCharactersObjectByProperty(characters, property)
    return convertCountCharactersObjectToChartStructure(charactersCount, property)
};
