import React, { useEffect, useState } from 'react';
import Button from './Button';
import PencilIcon from '../icons/PencilIcon';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { EditModeProps } from '@/interface/props';

interface ActionBarButtonEditProps {
    nav: 'Kecamatan' | 'Tahun' | 'Semester';
    stateList: ListSelectedRowsProps;
    setListSelected: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
}

export default function ActionBarButtonEdit({ nav, stateList, setListSelected, setEditMode }: ActionBarButtonEditProps) {
    const handleClick = () => {
        setEditMode((prevState) => ({
            ...prevState,
            [nav.toLowerCase()]: true,
        }));
    };

    return (
        <li>
            {nav == 'Kecamatan' && (
                <Button onClick={handleClick} disabled={stateList.length.kecamatan == 0} active={stateList.length.kecamatan != 0} className="w-7 h-7 flex items-center justify-center">
                    <PencilIcon className="w-4 h-4" />
                </Button>
            )}
            {nav == 'Tahun' && (
                <Button onClick={handleClick} disabled={stateList.length.tahun == 0} active={stateList.length.tahun > 0} className="w-7 h-7 flex items-center justify-center">
                    <PencilIcon className="w-4 h-4" />
                </Button>
            )}
            {nav == 'Semester' && (
                <Button onClick={handleClick} disabled={stateList.length.semester == 0} active={stateList.length.semester > 0} className="w-7 h-7 flex items-center justify-center">
                    <PencilIcon className="w-4 h-4" />
                </Button>
            )}
        </li>
    );
}
