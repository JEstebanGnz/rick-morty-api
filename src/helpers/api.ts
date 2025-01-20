import { Character } from '../interfaces/characters/characters-response';

export const getAllCharacters = async (): Promise<Character[]> => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const {results} = await response.json();
    return results
} 

export const getCharacterById = async (id: string): Promise<Character> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await response.json();
}