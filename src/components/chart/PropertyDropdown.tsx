'use client'

import { Character } from '@/interfaces';
import React from 'react'

export const PropertyDropdown = () => {

    const [selectedProperty, setSelectedProperty] = React.useState<keyof Character>('gender');

    return (
        <div>

            <h1 className="text-center text-2xl font-bold mb-10">Character Statistics</h1>
            {/* Dropdown to select property */}
            <div className="mb-4">
                <label htmlFor="property" className="mr-2 font-bold">
                    Select Property:
                </label>
                <select
                    id="property"
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value as keyof Character)}
                    className="border rounded px-2 py-1"
                >
                    <option value="gender">Gender</option>
                    <option value="status">Status</option>
                    <option value="species">Species</option>
                </select>
            </div>


        </div>
    )
}
