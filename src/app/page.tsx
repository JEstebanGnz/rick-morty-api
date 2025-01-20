import { CharactersSearch, Loading } from "@/components";
import { getAllCharacters } from "@/helpers/api";

export default async function Home() {
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
        <>
          <h1 className="text-3xl antialiased w-full text-center mb-10 font-bold">
            Your characters
          </h1>
          <CharactersSearch initialCharacters={characters} />
        </>
      )}
    </div>
  );
}
