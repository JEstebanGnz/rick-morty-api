import { Character } from '@/interfaces'
import { formatDate, getStatusColor } from '@/helpers/character-info/characterInfo';
import Image from 'next/image';
import React from 'react'

interface Props {
    character: Character
}

export const CharacterItem = ({character}: Props) => {
  
   
    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-[400px]">
                <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-black/70 px-4 py-2 rounded-full">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(character.status)} mr-2`}></div>
                        <span className="text-white font-medium capitalize">{character.status}</span>
                    </div>
                </div>
            </div>
   
            {/* Info Section */}
            <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">{character.name}</h1>
                    <div className="flex justify-center gap-3">
                        <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {character.species}
                        </div>
                        <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium capitalize">
                            {character.gender}
                        </div>
                    </div>
                </div>
   
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {character.type && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Type</h3>
                            <p className="text-base text-gray-800">{character.type}</p>
                        </div>
                    )}
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Origin</h3>
                        <p className="text-base text-gray-800">{character.origin.name}</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Last Known Location</h3>
                        <p className="text-base text-gray-800">{character.location.name}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">First Appearance</h3>
                        <p className="text-base text-gray-800">{formatDate(character.created)}</p>
                    </div>
                </div>

                {/* Episodes Count */}
                <div className="mt-8 text-center">
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Appears in {character.episode.length} episodes
                    </div>
                </div>
            </div>
        </div>
    );
}