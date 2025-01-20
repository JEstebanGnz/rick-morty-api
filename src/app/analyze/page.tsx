import { CharactersPieChart, PropertyDropdown } from "@/components";
import { getAllCharacters } from "@/helpers/api";
import { convertCountCharactersObjectToChartStructure, countCharactersByProperty } from "@/helpers/data/data";

export default async function page() {

    //Traer los personajes desde la API

    //Implementar el dropdown para seleccionar la propiedad

    //Pasar data al CharactersPieChart

      const characters = await getAllCharacters();
    
      const output = countCharactersByProperty(characters, "species")
    
      const chartData = convertCountCharactersObjectToChartStructure(output, "species");
    
      console.log(chartData);

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
          <div className="w-3/5 bg-white p-8 shadow-lg rounded-lg">
            <PropertyDropdown />
            <CharactersPieChart chartData={chartData} property="species"/>
          </div>
        </div>
      );
}