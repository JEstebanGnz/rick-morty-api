'use client'
import { Character } from '@/interfaces';
import { useState } from 'react';

interface Props{
    onPropertyChange: (property: keyof Character) => void
}

export const PropertyDropdown = ({onPropertyChange}: Props) => {

    const handlePropertyChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        onPropertyChange(e.target.value as keyof Character)
    }

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
                    onChange={handlePropertyChange}
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
