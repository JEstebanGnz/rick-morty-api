import { CharactersSearch } from "@/components";
import { getAllCharacters } from "@/helpers/api";

export default async function Home() {

  const characters = await getAllCharacters();

  return (
    <div>
      <h1 className="text-3xl antialiased w-full text-center mb-10 font-bold">
        {" "}
        Your characters{" "}
      </h1>
      <CharactersSearch initialCharacters={characters} />
    </div>
  );
}
