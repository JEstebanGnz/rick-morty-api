import { Character } from '@/interfaces'
import React from 'react'
import { CharacterCard } from './CharacterCard'

interface Props{
    characters: Character[]
}

export const CharactersGrid = ({characters}: Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center mt-10'>

        {characters.map(character => (
        <CharacterCard character={character} key={character.id}/>
        ))}

    </div>
  )
}
