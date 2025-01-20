import { Character } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props{
    character: Character
}

export const CharacterCard = ({character}: Props) => {

  // Status color indicator
  const statusColor = {
    alive: 'bg-green-500',
    dead: 'bg-red-500',
    unknown: 'bg-gray-500'
  }[character.status.toLowerCase()] || 'bg-gray-500';

    return (
        <div className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-72">
          {/* Image container */}
          <div className="relative h-72 overflow-hidden">
            <Link href={`/character/${character.id}`}> 
            <Image
              src={character.image} 
              width={300}
              height={300}
              alt={character.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* Status indicator */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center bg-black/70 px-3 py-1 rounded-full">
                <div className={`w-2 h-2 rounded-full ${statusColor} mr-2`}></div>
                <span className="text-white text-sm font-medium capitalize">{character.status}</span>
              </div>
            </div>
            </Link>
          </div>
          
          {/* Content container */}
          <div className="p-5 space-y-2">
            <h2 className="text-xl font-bold text-gray-800 truncate">{character.name}</h2>
            <div className="space-y-1">
              <div className="flex items-center text-gray-600">
                <span className="text-sm">Species:</span>
                <span className="ml-2 text-sm font-medium">{character.species}</span>
              </div>
              {/* <div className="flex items-center text-gray-600">
                <span className="text-sm">Gender:</span>
                <span className="ml-2 text-sm font-medium capitalize">{character.gender}</span>
              </div> */}
            </div>
          </div>
        </div>
      );
}
