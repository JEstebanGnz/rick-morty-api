import { CharacterItem, Loading } from "@/components";
import { getCharacterById } from "@/helpers/api";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: Props) {
  const { id } = await params;
  const character = await getCharacterById(id);

  if(!character){
    notFound();
  }

  return (
    <div>
    {!character ? (
      <Loading />
    ) : (
      <CharacterItem character={character} />
    )}
  </div>
  );
}

