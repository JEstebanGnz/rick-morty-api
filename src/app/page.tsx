import { CharactersGrid } from "@/components";
import { getAllCharacters } from "@/helpers/api"
import { convertCountCharactersObjectToChartStructure, countCharactersByProperty } from "@/helpers/data/data";


export default async function Home() {

  const characters = await getAllCharacters();

  return (

    <div>

        <CharactersGrid characters={characters}/>

    </div>

  )
}
