'use client'
import { CharactersGrid, FilterInput } from "@/components";
import { getCharactersByProperty } from "@/helpers/api";
import { Character } from "@/interfaces/characters/characters-response";
import { useState } from "react";

interface Props {
  initialCharacters: Character[];
}

export const CharactersSearch = ({ initialCharacters }: Props) => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(initialCharacters);
  const [error, setError] = useState<string | null>(null);

  const handleFilter = async (filterName: string) => {
    try {
      const filtered = await getCharactersByProperty('name', filterName);
      if (filtered.length === 0) {
        setError("No characters found with that name.");
        setFilteredCharacters([]); // Ensure the grid clears if no results.
      } else {
        setError(null); // Clear any previous error messages.
        setFilteredCharacters(filtered);
      }
    } catch (err) {
      console.error("Error fetching filtered characters:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <FilterInput onFilter={handleFilter} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <CharactersGrid characters={filteredCharacters} />
    </div>
  );
};
