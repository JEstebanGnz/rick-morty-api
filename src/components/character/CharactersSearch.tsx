'use client'
import { CharactersGrid, FilterInput } from "@/components";
import { Character } from "@/interfaces/characters/characters-response";
import { useState } from "react";

interface Props {
  initialCharacters: Character[];
}

export const CharactersSearch = ({ initialCharacters }: Props) => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(initialCharacters);

  const handleFilter = (filterName: string) => {
    const filtered = initialCharacters.filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div>
      <FilterInput onFilter={handleFilter} />
      <CharactersGrid characters={filteredCharacters} />
    </div>
  );
}