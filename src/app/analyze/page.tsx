import { CharactersAnalysis, Loading } from "@/components";
import { getAllCharacters } from "@/helpers/api";

export default async function page() {
  const characters = await getAllCharacters();

  if (characters.length === 0) {
    return (
      <p className="text-2xl antialiased w-full text-center mb-10 font-bold">
        An error ocurred while trying to get characters, please try again later
      </p>
    );
  }

  return (
    <div>
      {!characters ? (
        <Loading />
      ) : (
        <CharactersAnalysis characters={characters} />
      )}
    </div>
  );
}
