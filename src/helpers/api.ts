import { Character } from '../interfaces/characters/characters-response';

export const getAllCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error(`Failed to fetch characters. Status: ${response.status}`);
    }
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(`Got this error ${error}`)
    return []; 
  }
}

export const getCharacterById = async (id: string): Promise<Character | null> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) {
      throw new Error(`Character not found. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(`Got this error ${error}`)
    return null; // Return null on error
  }
}

export const getCharactersByProperty = async (property: keyof Character, name: string): Promise<Character[]> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?${property}=${name}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch characters by ${property}. Status: ${response.status}`);
    }
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(`Error fetching characters by ${property}:`, error);
    return [];
  }
}