import { CharactersAnalysis } from "@/components";
import { getAllCharacters } from "@/helpers/api";

export default async function page() {
  const characters = await getAllCharacters();
  return (
    <div>
      <CharactersAnalysis characters={characters} />
    </div>
  );
}
