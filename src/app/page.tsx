import { CharactersGrid } from "@/components";
import { getAllCharacters } from "@/helpers/api"


export default async function Home() {

  const characters = await getAllCharacters();

  return (

    <div>

        <CharactersGrid characters={characters}/>

    </div>

  )
}
