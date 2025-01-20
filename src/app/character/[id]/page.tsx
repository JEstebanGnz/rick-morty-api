import { CharacterItem } from '@/components'
import { getCharacterById } from '@/helpers/api'
import React from 'react'


interface Props {
    params: Promise<{
        id: string
    }>
}


export default async function page({ params }: Props) {

    const { id } = await params

    const character = await getCharacterById(id)




    return (
        <div>

            <CharacterItem character={character} />

        </div>
    )
}
