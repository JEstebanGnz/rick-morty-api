'use client'
import { Character } from '@/interfaces';
import { Select } from '../ui/Select';

interface Props{
    onPropertyChange: (property: keyof Character) => void
}

export const PropertyDropdown = ({onPropertyChange}: Props) => {

    const handlePropertyChange = (value: string) =>{
        onPropertyChange(value as keyof Character)
    }

    return (
        <div>
            {/* Dropdown to select property */}
            <div className="mb-4">
                <Select placeholder='Select Property' onChange={handlePropertyChange}/>
            </div>
        </div>
    )
}
